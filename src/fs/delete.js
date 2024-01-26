import { rm, readdir } from 'node:fs/promises';
import path from 'path';

const remove = async () => {
  const folderPath = 'src/fs/files';
  const fileToRemove = 'fileToRemove.txt';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(fileToRemove)) {
    throw new Error(errorMessage);
  }

  await rm(path.join(folderPath, fileToRemove))
};

await remove();
