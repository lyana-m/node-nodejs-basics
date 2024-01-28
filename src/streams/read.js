import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';

const read = async () => {
  const fileToRead = 'files/fileToRead.txt';
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const fileStream = createReadStream(join(__dirname, fileToRead));

  pipeline(fileStream, process.stdout, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  })
};

await read();
