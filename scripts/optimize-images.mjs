import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';
const THUMBNAILS_DIR = path.join(OUTPUT_DIR, 'thumbnails');
const HD_DIR = path.join(OUTPUT_DIR, 'hd');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processImages(dir, baseDir = INPUT_DIR) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip the optimized directory to avoid infinite recursion
      if (entry.name === 'optimized') continue;
      await processImages(fullPath, baseDir);
    } else if (entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      const relativePath = path.relative(baseDir, fullPath);
      const categoryDir = path.dirname(relativePath);
      const fileName = path.parse(entry.name).name;

      const thumbPath = path.join(THUMBNAILS_DIR, `${fileName}.webp`);
      const hdPath = path.join(HD_DIR, `${fileName}.webp`);

      await ensureDir(path.dirname(thumbPath));
      await ensureDir(path.dirname(hdPath));

      console.log(`Processing: ${relativePath}`);

      // Generate Thumbnail (low res)
      await sharp(fullPath)
        .resize(400, 600, { fit: 'inside' })
        .webp({ quality: 50 })
        .toFile(thumbPath);

      // Generate HD version (optimized)
      await sharp(fullPath)
        .resize(2560, 2560, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(hdPath);
    }
  }
}

(async () => {
  try {
    console.log('🚀 Starting image optimization...');
    await ensureDir(OUTPUT_DIR);
    await processImages(INPUT_DIR);
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
})();
