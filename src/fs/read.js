import { readFile, readdir } from 'node:fs/promises';
import path from 'path';

const read = async () => {
  const folderPath = 'src/fs/files';
  const fileToRead = 'fileToRead.txt';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(fileToRead)) {
    throw new Error(errorMessage);
  }

  const content = await readFile(path.join(folderPath, fileToRead), { encoding: 'utf8' });

  console.log(content);
};

await read();
