import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

async function compressImages() {
  const heroPath = join(publicDir, 'Hero.webp');
  
  // Mobile - very small for fast LCP
  await sharp(heroPath)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 60 })
    .toFile(join(publicDir, 'Hero-mobile.webp'));
  
  // Desktop - smaller
  await sharp(heroPath)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(join(publicDir, 'Hero-desktop.webp'));
    
  console.log('Images compressed');
}

compressImages().catch(console.error);