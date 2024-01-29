import { rename as baseRename, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  const sourceFile = 'wrongFilename.txt';
  const targetFile = 'properFilename.md';
  const errorMessage = 'FS operation failed';

  const files = await readdir(folderPath);

  if (!files.includes(sourceFile) || files.includes(targetFile)) {
    throw new Error(errorMessage);
  }

  await baseRename(join(folderPath, sourceFile), join(folderPath, targetFile))
};

await rename();
