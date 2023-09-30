export const getRandomTimestamp = () => {
  const now = new Date().getTime();
  const randomOffset = Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000);

  return new Date(now - randomOffset).toISOString();
};
