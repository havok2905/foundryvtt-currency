export const diceRoll = (num: number, size: number): number => {
  if (size <= 0) return 0;
  
  let total = 0;
  
  for(let x=0; x<num; x++) {
    const roll = Math.floor(Math.random() * size) + 1;
    total += roll;
  }

  return total;
};
