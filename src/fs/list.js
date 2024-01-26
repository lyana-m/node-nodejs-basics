import { readdir, access } from 'node:fs/promises';

const list = async () => {
  const folderPath = 'src/fs/files';
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
