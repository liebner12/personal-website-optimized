import fs from 'fs';
import sharp from 'sharp';
const [, , inputPath, outputPath] = process.argv;

fs.readdirSync(inputPath || 'assets').forEach(async (file) => {
  const [fileName, extension] = file.split('.');

  if (extension !== 'jpg' && extension !== 'png' && extension !== 'jpeg') {
    return;
  }

  await sharp(`${inputPath || 'assets'}/${file}`)
    .resize(1280)
    .webp({ quality: 70 })
    .toFile(`${outputPath || 'webp'}/${fileName}.webp`);
});
