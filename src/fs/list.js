import { readdir, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  const errorMessage = 'FS operation failed';

  try {
    await access(folderPath);
  } catch (error) {
    throw new Error(errorMessage);
  }

  const files = await readdir(folderPath);

  console.log(files);
};

await list();
