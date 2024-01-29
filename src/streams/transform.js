import { pipeline, Transform } from 'stream';

const transform = async () => {
  const revertString = new Transform({
    transform(chunk, enc, cb) {
      const reverted = chunk.toString().trim().split('').reverse().join('') + '\n';
      cb(null, reverted);
    },
  });

  pipeline(process.stdin, revertString, process.stdout, (err) => {
    if (err) {
      console.error('Error:', err);
    }
  })
};

await transform();
