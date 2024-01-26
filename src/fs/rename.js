import { rename as baseRename, readdir } from 'node:fs/promises';
import path from 'path';

const rename = async () => {
  const folderPath = 'src/fs/files';
  const sourceFile = 'wrongFilename.txt';
  const targetFile = 'properFilename.md';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(sourceFile) || files.includes(targetFile)) {
    throw new Error(errorMessage);
  }

  await baseRename(path.join(folderPath, sourceFile), path.join(folderPath, targetFile))
};

await rename();
