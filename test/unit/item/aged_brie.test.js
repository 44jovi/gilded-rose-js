const AgedBrie = require("../../../src/items/aged_brie");

describe("`AgedBrie` - child class of `Item`", () => {
  xit("updateItemSellIn() updates item's sellIn value", () => {
    const agedBrie = new AgedBrie("Aged Brie", 10, 50);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(10);

    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(9);
  });
});

// it("updateItemSellIn() cannot decrease an item's sellIn value lower than zero", () => {
//   const agedBrie = new AgedBrie("Aged Brie", 0, 50);

//   expect(agedBrie.name).toEqual("Aged Brie");
//   expect(agedBrie.sellIn).toEqual(0);

//   agedBrie.updateItemSellIn();

//   expect(agedBrie.sellIn).toEqual(0);
// });

// it("updateItemQuality() increases 'Aged Brie' item's quality (max value = 50)", () => {
//   const agedBrie = new AgedBrie("Aged Brie", 10, 49);

//   expect(agedBrie.name).toEqual("Aged Brie");
//   expect(agedBrie.sellIn).toEqual(10);
//   expect(agedBrie.quality).toEqual(1);

//   agedBrie.updateItemSellIn();
//   agedBrie.updateItemQuality();

//   expect(agedBrie.sellIn).toEqual(9);
//   expect(agedBrie.quality).toEqual(2);
// });

// if sellIn = 0, quality stops changing
