export const dateDiffInHours = (a: Date | null, b: Date | null): number => {
  if (!a || !b) return 0;
  const ms_per_hour = 1000 * 60 * 60;
  return +((+b - +a) / ms_per_hour).toFixed(2);
};
