const parseEnv = () => {
  const filteredEnvs = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));

  const result = filteredEnvs.reduce((prev, curr, index) => {
    const delimiter = index === filteredEnvs.length - 1 ? '' : '; '
    return prev + `${curr[0]}=${curr[1]}` + delimiter;
  }, '')

  console.log(result)
};

parseEnv();
