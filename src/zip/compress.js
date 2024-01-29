import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const fileToCompress = 'fileToCompress.txt';
  const compressedFile = 'archive.gz';
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const gzip = createGzip();
  const rs = createReadStream(join(__dirname, 'files', fileToCompress));
  const ws = createWriteStream(join(__dirname,'files', compressedFile));

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  });
};

await compress();
