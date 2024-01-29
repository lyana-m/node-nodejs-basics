import { rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  const fileToRemove = 'fileToRemove.txt';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(fileToRemove)) {
    throw new Error(errorMessage);
  }

  await rm(join(folderPath, fileToRemove))
};

await remove();
