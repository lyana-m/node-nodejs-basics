import cp from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const child = cp.fork((join(__dirname, 'files', 'script.js')), args);

  child.on('message', (data) => {
    process.stdout.write(`Received from child process: ${data}\n`);
  });
};

spawnChildProcess(['hello', 'from', 'Bruce']);
