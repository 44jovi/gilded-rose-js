const AgedBrie = require("../../../src/items/aged_brie");

describe("`AgedBrie` - child class of `RegularItem`", () => {
  it("updateItemSellIn() updates sellIn value", () => {
    const agedBrie = new AgedBrie("Aged Brie", 10, 50);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(10);

    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(9);
  });

  it("updateItemSellIn() cannot decrease `sellIn` value lower than zero", () => {
    const agedBrie = new AgedBrie("Aged Brie", 0, 50);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(0);

    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(0);
  });

  it("updateItemQuality() increases `quality` value (max value = 50)", () => {
    const agedBrie = new AgedBrie("Aged Brie", 10, 49);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(10);
    expect(agedBrie.quality).toEqual(49);

    agedBrie.updateItemQuality();
    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(9);
    expect(agedBrie.quality).toEqual(50);

    agedBrie.updateItemQuality();
    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(8);
    // Quality does not go over 50
    expect(agedBrie.quality).toEqual(50);
  });

  it("updateItemQuality() does not increase `quality` value after sell by date", () => {
    const agedBrie = new AgedBrie("Aged Brie", 0, 49);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(0);
    expect(agedBrie.quality).toEqual(49);

    agedBrie.updateItemQuality();
    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(0);
    // Quality remains unchanged
    expect(agedBrie.quality).toEqual(49);
  });
});
