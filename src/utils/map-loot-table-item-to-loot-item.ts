import {diceRoll} from './dice-roll';
import {
  LootItem,
  LootTableItem
} from '../types';

export const mapLootTableItemToLootItem = (item: LootTableItem): LootItem => {
  const {
    multiplier,
    name,
    num,
    size
  } = item;

  return { name, total: diceRoll(num, size) * multiplier };
}
