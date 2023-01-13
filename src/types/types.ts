export interface LootTableItem {
  multiplier: number;
  name: string;
  num: number;
  size: number;
}

export interface LootTableRow {
  loot: LootTableItem[];
  max: number;
  min: number;
}

export type LootTable = LootTableRow[];

export interface LootItem {
  name: string;
  total: number;
}

export type Loot = LootItem[];

export interface LootBreakdown {
  individualLoot: Loot;
  remainderLoot: Loot;
}