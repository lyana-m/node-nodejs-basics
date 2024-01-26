import { writeFile, access } from 'node:fs/promises';
// import { access } from 'node:fs';

const create = async () => {
  const path = 'src/fs/files/fresh.txt';

  try {
    await access(path);
    throw new Error('FS operation failed');
  } catch (e) {
    if (e.code === 'ENOENT') {
      await writeFile(path, 'I am fresh and young');
    } else {
      throw e;
    }
  }
};

// const create = () => {
//   const path = 'src/fs/files/fresh.txt';

//   access(path, (err) => {
//     if (!err) {
//       throw new Error('FS operation failed');
//     }

//     writeFile(path, 'I am fresh and young', (err) => {
//       if (err) {
//         throw new Error('FS operation failed');
//       }
//     });
//   });
// }

await create();
