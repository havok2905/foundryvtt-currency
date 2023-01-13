import {diceRoll} from "./dice-roll";

describe('diceRoll', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.49);
  });

  it('should roll 0d0', () => {
    const result = diceRoll(0, 0);
    expect(result).toEqual(0);
  });

  it('should roll 1d0', () => {
    const result = diceRoll(1, 0);
    expect(result).toEqual(0);
  });

  it('should roll 0d20', () => {
    const result = diceRoll(0, 20);
    expect(result).toEqual(0);
  });
  
  it('should roll 1d20', () => {
    const result = diceRoll(1, 20);
    expect(result).toEqual(10);
  });

  it('should roll 2d20', () => {
    const result = diceRoll(2, 20);
    expect(result).toEqual(20);
  });
});
