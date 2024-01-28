import {createHash} from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'stream';
import path from 'path';

const calculateHash = async () => {
  const folderPath = 'src/hash/files';
  const fileToRead = 'fileToCalculateHashFor.txt';

  const hash = createHash('sha256').setEncoding('hex');
  const fileStream = createReadStream(path.join(folderPath, fileToRead));

  pipeline(fileStream, hash, (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(hash.read());
    }
  })
};

await calculateHash();
