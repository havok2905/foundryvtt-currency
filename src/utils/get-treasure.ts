import {diceRoll} from './dice-roll';
import {getLootTableRow} from './get-loot-table-row';
import {
  LOOT_CR_0_4,
  LOOT_CR_5_10,
  LOOT_CR_11_16,
  LOOT_CR_17_20
} from '../constants';
import {Loot} from '../types';
import {mapLootTableItemToLootItem} from './map-loot-table-item-to-loot-item';

export const getTreasure = (cr: number): Loot => {
  const roll = diceRoll(1, 100);

  if (cr <= 4) {
    const lootTableRow = getLootTableRow(LOOT_CR_0_4, roll);
    return lootTableRow?.loot.map(mapLootTableItemToLootItem) ?? [];
  }

  if (cr <= 10) {
    const lootTableRow = getLootTableRow(LOOT_CR_5_10, roll);
    return lootTableRow?.loot.map(mapLootTableItemToLootItem) ?? [];
  }

  if (cr <= 16) {
    const lootTableRow = getLootTableRow(LOOT_CR_11_16, roll);
    return lootTableRow?.loot.map(mapLootTableItemToLootItem) ?? [];
  }

  const lootTableRow = getLootTableRow(LOOT_CR_17_20, roll);
  return lootTableRow?.loot.map(mapLootTableItemToLootItem) ?? [];
};
