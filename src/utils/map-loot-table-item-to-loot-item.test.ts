import {mapLootTableItemToLootItem} from './map-loot-table-item-to-loot-item';

describe('mapLootTableItemToLootItem', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.49);
  });

  it('should map an item', () => {
    const lootTableItem = {
      multiplier: 1,
      name: 'Foo',
      num: 1,
      size: 6
    };

    const result = mapLootTableItemToLootItem(lootTableItem);

    expect(result.name).toEqual('Foo');
    expect(result.total).toEqual(3);
  });

  it('should map an item with a multiplier', () => {
    const lootTableItem = {
      multiplier: 10,
      name: 'Foo',
      num: 1,
      size: 6
    };

    const result = mapLootTableItemToLootItem(lootTableItem);

    expect(result.name).toEqual('Foo');
    expect(result.total).toEqual(30);
  });
});