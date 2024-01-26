const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((prev, curr, index) => {
    const delimiter = index === args.length - 1 ? '' : ', ';

    if (index % 2) {
      return prev + curr + delimiter;
    } else {
      const propName = curr.slice(2);
      return prev + propName + ' is ';
    }

  }, '')

  console.log(result);
};

parseArgs();
