import {
  currencyBreakdown,
  EmptyLootException,
  EmptyPartyException
} from './currency-breakdown';

describe('currencyBreakdown', () => {
  it('should throw an error when there is empty loot', () => {
    expect(() => {
      const loot = [];
      const partyMembers = 3;
      currencyBreakdown(loot, partyMembers);
    }).toThrow(EmptyLootException);
  });

  it('should throw an error when there are no party members', () => {
    expect(() => {
      const loot = [
        { name: 'Copper Pieces', total: 10 },
        { name: 'Silver Pieces', total: 9 }
      ];
      const partyMembers = 0;
      currencyBreakdown(loot, partyMembers);
    }).toThrow(EmptyPartyException);
  });

  it('should break down a list of loot, with remainders', () => {
    const loot = [
      { name: 'Copper Pieces', total: 10 },
      { name: 'Silver Pieces', total: 9 }
    ];

    const partyMembers = 3;

    const result = currencyBreakdown(loot, partyMembers);

    expect(result.individualLoot[0].name).toEqual('Copper Pieces');
    expect(result.individualLoot[0].total).toEqual(3);
    expect(result.individualLoot[1].name).toEqual('Silver Pieces');
    expect(result.individualLoot[1].total).toEqual(3);

    expect(result.remainderLoot[0].name).toEqual('Copper Pieces');
    expect(result.remainderLoot[0].total).toEqual(1);
    expect(result.remainderLoot[1].name).toEqual('Silver Pieces');
    expect(result.remainderLoot[1].total).toEqual(0);
  });
});
