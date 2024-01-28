import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const fileToCompress = 'files/fileToCompress.txt';
  const compressedFile = 'files/archive.gz';
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const gzip = createGzip();
  const rs = createReadStream(join(__dirname, fileToCompress));
  const ws = createWriteStream(join(__dirname, compressedFile));

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  });
};

await compress();
