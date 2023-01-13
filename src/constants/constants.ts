import {LootTable} from '../types';

export const COPPER_PIECES = 'Copper Pieces';
export const SILVER_PIECES = 'Silver Pieces';
export const ELECTRUM_PIECES = 'Electrum Pieces';
export const GOLD_PIECES = 'Gold Pieces';
export const PLATINUM_PIECES = 'Platinum Pieces';

export const LOOT_CR_0_4: LootTable = [
  {
    min: 0,
    max: 30,
    loot: [
      { name: COPPER_PIECES,   num: 5, size: 6, multiplier: 1 },
      { name: SILVER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 0, size: 0, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 31,
    max: 60,
    loot: [
      { name: COPPER_PIECES,   num: 5, size: 6, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 1 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 0, size: 0, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 61,
    max: 70,
    loot: [
      { name: COPPER_PIECES,   num: 5, size: 6, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 1 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 1, size: 6, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 71,
    max: 95,
    loot: [
      { name: COPPER_PIECES,   num: 5, size: 6, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 1 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 3, size: 6, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 96,
    max: 100,
    loot: [
      { name: COPPER_PIECES,   num: 5, size: 6, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 1 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 3, size: 6, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 1, size: 6, multiplier: 1 }
    ]
  }
];

export const LOOT_CR_5_10: LootTable = [
  {
    min: 0,
    max: 30,
    loot: [
      { name: COPPER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: SILVER_PIECES,   num: 6, size: 6, multiplier: 10 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 0, size: 0, multiplier: 1 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 31,
    max: 60,
    loot: [
      { name: COPPER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: SILVER_PIECES,   num: 6, size: 6, multiplier: 10 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 2, size: 6, multiplier: 10 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 61,
    max: 70,
    loot: [
      { name: COPPER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: SILVER_PIECES,   num: 6, size: 6, multiplier: 10 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 2, size: 6, multiplier: 10 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 71,
    max: 95,
    loot: [
      { name: COPPER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: SILVER_PIECES,   num: 6, size: 6, multiplier: 10 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 4, size: 6, multiplier: 10 },
      { name: PLATINUM_PIECES, num: 1, size: 6, multiplier: 1 }
    ]
  },
  {
    min: 96,
    max: 100,
    loot: [
      { name: COPPER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: SILVER_PIECES,   num: 6, size: 6, multiplier: 10 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 4, size: 6, multiplier: 10 },
      { name: PLATINUM_PIECES, num: 3, size: 6, multiplier: 1 }
    ]
  }
];

export const LOOT_CR_11_16: LootTable = [
  {
    min: 0,
    max: 20,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 1, size: 6, multiplier: 100 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 21,
    max: 35,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 4, size: 6, multiplier: 100 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 2, size: 6, multiplier: 100 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 36,
    max: 75,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 6, size: 0, multiplier: 100 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 2, size: 6, multiplier: 100 },
      { name: PLATINUM_PIECES, num: 1, size: 6, multiplier: 10 }
    ]
  },
  {
    min: 76,
    max: 100,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 6, size: 0, multiplier: 100 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 2, size: 6, multiplier: 100 },
      { name: PLATINUM_PIECES, num: 2, size: 6, multiplier: 10 }
    ]
  }
];

export const LOOT_CR_17_20: LootTable = [
  {
    min: 0,
    max: 15,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 2, size: 6, multiplier: 1000 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 8, size: 6, multiplier: 100 },
      { name: PLATINUM_PIECES, num: 0, size: 0, multiplier: 1 }
    ]
  },
  {
    min: 16,
    max: 55,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 2, size: 6, multiplier: 1000 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 1, size: 6, multiplier: 1000 },
      { name: PLATINUM_PIECES, num: 1, size: 6, multiplier: 100 }
    ]
  },
  {
    min: 57,
    max: 100,
    loot: [
      { name: COPPER_PIECES,   num: 0, size: 0, multiplier: 1 },
      { name: SILVER_PIECES,   num: 2, size: 6, multiplier: 1000 },
      { name: ELECTRUM_PIECES, num: 0, size: 0, multiplier: 1 },
      { name: GOLD_PIECES,     num: 1, size: 6, multiplier: 1000 },
      { name: PLATINUM_PIECES, num: 2, size: 6, multiplier: 100 }
    ]
  }
];
