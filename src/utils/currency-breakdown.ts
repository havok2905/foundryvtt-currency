import {
  Loot,
  LootBreakdown
} from '../types';

export class EmptyLootException extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyLootException';
  }
}

export class EmptyPartyException extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyPartyException';
  }
}

export const currencyBreakdown = (currencyLoot: Loot, partyMembers: number): LootBreakdown => {
  if (currencyLoot.length < 1) {
    throw new EmptyLootException('There must be loot to break down');
  }

  if (partyMembers < 1) {
    throw new EmptyPartyException('There must be a party member to break loot down with.');
  }

  const breakdown: LootBreakdown = {
    individualLoot: [],
    remainderLoot: [],
  };

  currencyLoot.forEach((currencyLootItem) => {
    const remainder = currencyLootItem.total % partyMembers;
    const total = ( currencyLootItem.total - remainder ) / partyMembers;

    const individualLootItem = {...currencyLootItem};
    const remainderLootItem = {...currencyLootItem};

    individualLootItem.total = total;
    remainderLootItem.total = remainder;

    breakdown.individualLoot.push(individualLootItem);
    breakdown.remainderLoot.push(remainderLootItem);
  });

  return breakdown;
};
