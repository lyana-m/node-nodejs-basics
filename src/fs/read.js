import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  const fileToRead = 'fileToRead.txt';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(fileToRead)) {
    throw new Error(errorMessage);
  }

  const content = await readFile(join(folderPath, fileToRead), { encoding: 'utf8' });

  console.log(content);
};

await read();
