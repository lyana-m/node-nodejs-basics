import { access, readdir, mkdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const sourceFolderPath = join(__dirname, 'files');
  const copyFolderPath = join(__dirname, 'files_copy');
  const errorMessage = 'FS operation failed';

  // if sourse folder does not exist - error
  try {
    await access(sourceFolderPath);
  } catch (error) {
    throw new Error(errorMessage);
  }

  // if destination folder already exists - error
  try {
    await access(copyFolderPath);
    throw new Error(errorMessage);
  } catch (error) {
    if (error.message === errorMessage) {
      throw error;
    }
  }

  // create destination folder
  await mkdir(copyFolderPath, { recursive: true });

  // read files in source folder
  const files = await readdir(sourceFolderPath);

  for (const file of files) {
    const sourceFilePath = join(sourceFolderPath, file);
    const copyFilePath = join(copyFolderPath, file);

    await copyFile(sourceFilePath, copyFilePath);
  }
};

await copy();
