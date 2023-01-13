import {
  LootTable,
  LootTableRow
} from '../types';

export const getLootTableRow = (lootTable: LootTable, roll: number): LootTableRow | undefined => {
  return lootTable.find(item => roll >= item.min && roll <= item.max);
};
