import {getLootTableRow} from './get-loot-table-row';

describe('getLootTableRow', ()=> {
  const lootTable = [
    {
      min: 0,
      max: 30,
      loot: [
        {name: 'Copper Pieces', num: 5, size: 6, multiplier: 1}
      ]
    },
    {
      min: 31,
      max: 60,
      loot: [
        {name: 'Copper Pieces', num: 6, size: 6, multiplier: 1}
      ]
    },
    {
      min: 61,
      max: 70,
      loot: [
        {name: 'Copper Pieces', num: 7, size: 6, multiplier: 1}
      ]
    },
    {
      min: 71,
      max: 95,
      loot: [
        {name: 'Copper Pieces', num: 7, size: 6, multiplier: 1}
      ]
    },
    {
      min: 96,
      max: 100,
      loot: [
        {name: 'Copper Pieces', num: 8, size: 6, multiplier: 1}
      ]
    }
  ];

  it('should return undefined for a roll too low', () => {
    const roll = -1;
    const result = getLootTableRow(lootTable, roll);
    expect(result).toEqual(undefined);
  });

  it('should return undefined for a roll too high', () => {
    const roll = 101;
    const result = getLootTableRow(lootTable, roll);
    expect(result).toEqual(undefined);
  });

  it('should fetch a row from a loot table', () => {
    const roll = 65;
    const result = getLootTableRow(lootTable, roll);

    expect(result?.min).toEqual(61);
    expect(result?.max).toEqual(70);
    expect(result?.loot[0].name).toEqual('Copper Pieces');
    expect(result?.loot[0].num).toEqual(7);
    expect(result?.loot[0].size).toEqual(6);
  });
});