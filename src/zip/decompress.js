import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const fileToWrite = 'fileToCompress.txt';
  const fileToDecompress = 'archive.gz';
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const unzip = createGunzip();
  const rs = createReadStream(join(__dirname, 'files', fileToDecompress));
  const ws = createWriteStream(join(__dirname, 'files', fileToWrite));

  pipeline(rs, unzip, ws, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  });
};

await decompress();
