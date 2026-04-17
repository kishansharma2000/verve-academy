import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

async function compressImages() {
  const heroPath = join(publicDir, 'Hero.webp');
  
  // Mobile version - 800px width, quality 70
  await sharp(heroPath)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(join(publicDir, 'Hero-mobile.webp'));
  
  // Desktop version - 1600px width, quality 80  
  await sharp(heroPath)
    .resize(1600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(publicDir, 'Hero-desktop.webp'));
    
  console.log('Images compressed successfully');
}

compressImages().catch(console.error);