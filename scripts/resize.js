import fs from 'fs';
import sharp from 'sharp';
const [, , inputPath, outputPath] = process.argv;

fs.readdirSync(inputPath || 'assets').forEach(async (file) => {
  const [fileName, extension] = file.split('.');

  if (extension !== 'webp') {
    return;
  }

  await sharp(`${inputPath || 'assets'}/${file}`)
    .resize(720)
    .toFile(`${outputPath || 'webp'}/${fileName}.webp`);
});
