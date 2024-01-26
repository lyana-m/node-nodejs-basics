import { access, readdir, mkdir, stat, copyFile } from 'node:fs/promises';
import path from 'path';

const copy = async () => {
  const sourceFolderPath = 'src/fs/files';
  const copyFolderPath = 'src/fs/files_copy';
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
    const sourceFilePath = path.join(sourceFolderPath, file);
    const copyFilePath = path.join(copyFolderPath, file);

    await copyFile(sourceFilePath, copyFilePath);
  }
};

await copy();
