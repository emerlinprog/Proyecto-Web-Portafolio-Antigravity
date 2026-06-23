import sharp from 'sharp';
import { statSync } from 'fs';

const kb = (p) => (statSync(p).size / 1024).toFixed(1) + ' KB';

const jobs = [
  { in: 'apple-touch-icon.png', tmp: 'apple-touch-icon.opt.png', w: 180, h: 180 },
  { in: 'favicon.png', tmp: 'favicon.opt.png', w: 96, h: 96 },
  { in: 'og-image.png', tmp: 'og-image.opt.png', w: 1200, h: null },
];

for (const j of jobs) {
  const before = kb(j.in);
  let img = sharp(j.in);
  const meta = await img.metadata();
  if (j.h) img = img.resize(j.w, j.h, { fit: 'cover' });
  else if (meta.width > j.w) img = img.resize({ width: j.w });
  await img.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(j.tmp);
  console.log(`${j.in}: ${before} (${meta.width}x${meta.height}) -> ${kb(j.tmp)}`);
}
