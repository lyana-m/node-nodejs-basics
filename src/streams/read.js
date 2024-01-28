import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';

const read = async () => {
  const folderPath = 'src/streams/files';
  const fileToRead = 'fileToRead.txt';

  const fileStream = createReadStream(path.join(folderPath, fileToRead));

  pipeline(fileStream, process.stdout, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  })
};

await read();
