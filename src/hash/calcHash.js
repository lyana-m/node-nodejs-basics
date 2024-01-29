import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, 'files');
  const fileToRead = 'fileToCalculateHashFor.txt';

  const hash = createHash('sha256').setEncoding('hex');
  const fileStream = createReadStream(join(folderPath, fileToRead));

  pipeline(fileStream, hash, (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(hash.read());
    }
  })
};

await calculateHash();
