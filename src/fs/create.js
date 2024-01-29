import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = join(__dirname, 'files', 'fresh.txt');

  try {
    await access(path);
    throw new Error('FS operation failed');
  } catch (e) {
    if (e.code === 'ENOENT') {
      await writeFile(path, 'I am fresh and young');
    } else {
      throw e;
    }
  }
};

await create();
