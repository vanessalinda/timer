const input = process.argv.slice(2);

const simpleTimer = () => {
  if (!input) return;
  const nums = input
    .filter((el) => !isNaN(el) && el >= 0)
    .map((el) => Number(el));

  for (const beep of nums) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, `${beep}000`);
  }
};

simpleTimer();
