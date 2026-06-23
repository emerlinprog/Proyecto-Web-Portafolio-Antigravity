const fs = require("fs");
const path = require("path");
const http = require("http");
const { URL } = require("url");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".toml": "application/toml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8"
};

function cacheControlFor(ext) {
    if (ext === ".html" || ext === ".js" || ext === ".css") {
        return "no-store, max-age=0";
    }
    return "public, max-age=3600";
}

function loadEnvFile() {
    const envPath = path.join(rootDir, ".env");
    if (!fs.existsSync(envPath)) return;
    try {
        const content = fs.readFileSync(envPath, "utf8");
        for (const line of content.split(/\r?\n/)) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) continue;
            const separatorIndex = trimmed.indexOf("=");
            if (separatorIndex === -1) continue;
            const key = trimmed.slice(0, separatorIndex).trim();
            let value = trimmed.slice(separatorIndex + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            if (!(key in process.env)) process.env[key] = value;
        }
    } catch (e) {
        console.error("[preview] Error loading .env:", e.message);
    }
}

loadEnvFile();

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
}

async function handleFunction(req, res, pathname, url) {
    const functionName = pathname.replace("/.netlify/functions/", "");
    const functionPath = path.join(rootDir, "netlify", "functions", `${functionName}.js`);
    
    if (!fs.existsSync(functionPath)) {
        console.log(`[preview] 404 Function: ${pathname}`);
        sendJson(res, 404, { error: `Function "${functionName}" not found` });
        return;
    }

    try {
        delete require.cache[require.resolve(functionPath)];
        const mod = require(functionPath);
        const handler = mod.handler || mod.default || mod;

        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);

        const result = await handler({
            body: Buffer.concat(chunks).toString("utf8"),
            headers: req.headers,
            httpMethod: req.method,
            path: pathname,
            queryStringParameters: Object.fromEntries(url.searchParams.entries()),
            rawUrl: url.toString()
        }, {});

        res.writeHead(result?.statusCode || 200, result?.headers || {});
        res.end(result?.body || "");
    } catch (error) {
        console.error(`[preview] Function error:`, error);
        sendJson(res, 500, { error: "Function execution failed" });
    }
}

function resolveStaticPath(pathname) {
    const decodedPath = decodeURIComponent(pathname);
    const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");

    // 1. Check dist/ first. This mirrors Netlify's publish directory.
    const distPath = path.join(distDir, relativePath);
    if (fs.existsSync(distPath) && !fs.statSync(distPath).isDirectory()) {
        return distPath;
    }
    
    // 2. Check public/
    const publicPath = path.join(rootDir, "public", relativePath);
    if (fs.existsSync(publicPath) && !fs.statSync(publicPath).isDirectory()) {
        return publicPath;
    }

    // 3. Check root/
    const rootPath = path.join(rootDir, relativePath);
    if (fs.existsSync(rootPath) && !fs.statSync(rootPath).isDirectory()) {
        return rootPath;
    }

    // 4. SPA fallback for direct route refreshes.
    const spaIndex = path.join(distDir, "index.html");
    if (fs.existsSync(spaIndex) && !path.extname(relativePath)) {
        return spaIndex;
    }

    return null;
}

const server = http.createServer(async (req, res) => {
    const startTime = Date.now();
    let pathname = "/unknown";
    try {
        const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
        pathname = url.pathname;

        if (pathname.startsWith("/.netlify/functions/")) {
            await handleFunction(req, res, pathname, url);
        } else {
            const staticPath = resolveStaticPath(pathname);
            if (staticPath) {
                const ext = path.extname(staticPath).toLowerCase();
                const contentType = mimeTypes[ext] || "application/octet-stream";
                
                try {
                    const data = await fs.promises.readFile(staticPath);
                    res.writeHead(200, { 
                        "Content-Type": contentType,
                        "Content-Length": data.length,
                        "Cache-Control": cacheControlFor(ext)
                    });
                    res.end(data);
                } catch (readError) {
                    console.error(`[preview] Error reading file ${staticPath}:`, readError.message);
                    res.writeHead(500);
                    res.end("Internal Server Error");
                }
            } else {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Not Found");
            }
        }
    } catch (error) {
        console.error(`[preview] Request error:`, error);
        res.writeHead(500);
        res.end("Internal Server Error");
    } finally {
        const duration = Date.now() - startTime;
        console.log(`[preview] ${req.method} ${pathname} - ${res.statusCode} (${duration}ms)`);
    }
});

server.listen(port, host, () => {
    console.log(`[preview] Server running at http://${host}:${port}`);
});
