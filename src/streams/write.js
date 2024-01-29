import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';

const write = async () => {
  const fileToWrite = 'fileToWrite.txt';
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const rs = createWriteStream(join(__dirname, 'files', fileToWrite));

  pipeline(process.stdin, rs, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  })
};

await write();
