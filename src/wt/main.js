import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cpus } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));

const availableCpus = cpus();
const resultArray = [];
let counter = 0;

const isLastIteration = () => {
  if (counter === availableCpus.length) {
    const sortedArray = resultArray.sort((a, b) => a.data - b.data);
    console.log(sortedArray);
  }
}

const performCalculations = async () => {
  availableCpus.forEach((cpu, index) => {
    const fibInput = index + 10;

    const worker = new Worker(join(__dirname, 'worker.js'), { workerData: fibInput });

    worker.on('message', (msg) => {
      resultArray.push({
        status: 'resolved',
        data: msg,
      });

      counter++;

      isLastIteration();
    });

    worker.on('error', () => {
      resultArray.push({
        status: 'error',
        data: null,
      });

      counter++;

      isLastIteration();
    });

  });
};

await performCalculations();
