export const toBengaliNumber = (num: number | string): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
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