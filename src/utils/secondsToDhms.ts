export const hoursToDhms = (hours: number) => {
  // seconds = Number(seconds);
  const seconds = hours * 60 * 60;
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  const dDisplay = d > 0 ? d + (d == 1 ? "day " : "days ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
  return dDisplay + hDisplay + mDisplay;
};
