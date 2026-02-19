/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                'bento-dark': '#121212',
                'bento-card': '#1e1e1e',
                'bento-accent': '#3b82f6',
            }
        },
    },
    plugins: [],
}
