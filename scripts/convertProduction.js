import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve } from 'path';
import sharp from 'sharp';

async function getFiles(dir, currentDir = undefined) {
  const directories = await readdir(dir, { withFileTypes: true });
  directories.forEach((dirent) => {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      const outputDirectory = `../public/optimized/${dirent.name}`;
      if (!existsSync(outputDirectory)) mkdir(outputDirectory);
      return getFiles(res, dirent.name);
    }

    const outputFilePath = `../public/optimized/${
      currentDir ? `${currentDir}/${dirent.name}` : dirent.name
    }`;

    sharp(res).resize(720).webp({ quality: 70 }).toFile(outputFilePath);
    return res;
  });
}

getFiles('../public/images');
