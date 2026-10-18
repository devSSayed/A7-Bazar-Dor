export const toBengaliNumber = (num: number | string | undefined): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  if (num === undefined || num === null) return '';
  return num
    .toString()
    .replace(/[0-9]/g, (digit) => bnDigits[parseInt(digit, 10)]);
};


export const toBengaliUnit = (unit: string): string => {
  const unitMap: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    dozen: 'ডজন',
    piece: 'পিস',
  };
  return unitMap[unit.toLowerCase()] || unit;
};