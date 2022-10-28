const ConjuredItem = require("../../../src/items/conjured_item");

describe("`ConjuredItem` - child class of `RegularItem`", () => {
  it("updateItemSellIn() updates item's sellIn value", () => {
    const conjuredItem = new ConjuredItem("Conjured Item 1", 10, 50);

    expect(conjuredItem.name).toEqual("Conjured Item 1");
    expect(conjuredItem.sellIn).toEqual(10);
    expect(conjuredItem.quality).toEqual(50);

    conjuredItem.updateItemSellIn();

    expect(conjuredItem.sellIn).toEqual(9);
  });

  it("updateItemSellIn() cannot decrease an item's sellIn value lower than zero", () => {
    const conjuredItem = new ConjuredItem("Conjured Item 1", 0, 50);

    expect(conjuredItem.name).toEqual("Conjured Item 1");
    expect(conjuredItem.sellIn).toEqual(0);
    expect(conjuredItem.quality).toEqual(50);

    conjuredItem.updateItemSellIn();

    expect(conjuredItem.sellIn).toEqual(0);
  });

  it("updateItemQuality() updates item's quality value correctly before sell by date ", () => {
    const conjuredItem = new ConjuredItem("Conjured Item 2", 10, 50);

    expect(conjuredItem.name).toEqual("Conjured Item 2");
    expect(conjuredItem.sellIn).toEqual(10);
    expect(conjuredItem.quality).toEqual(50);

    conjuredItem.updateItemQuality();
    conjuredItem.updateItemSellIn();

    expect(conjuredItem.sellIn).toEqual(9);
    expect(conjuredItem.quality).toEqual(48);
  });

  it("updateItemQuality() updates item's quality value correctly after sell by date ", () => {
    const conjuredItem = new ConjuredItem("Conjured Item 3", 0, 50);

    expect(conjuredItem.name).toEqual("Conjured Item 3");
    expect(conjuredItem.sellIn).toEqual(0);
    expect(conjuredItem.quality).toEqual(50);

    conjuredItem.updateItemQuality();
    conjuredItem.updateItemSellIn();

    expect(conjuredItem.sellIn).toEqual(0);
    expect(conjuredItem.quality).toEqual(46);
  });

  it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
    const conjuredItem = new ConjuredItem("Conjured Item 4", 10, 0);

    expect(conjuredItem.name).toEqual("Conjured Item 4");
    expect(conjuredItem.sellIn).toEqual(10);
    expect(conjuredItem.quality).toEqual(0);

    conjuredItem.updateItemQuality();
    conjuredItem.updateItemSellIn();

    expect(conjuredItem.sellIn).toEqual(9);
    expect(conjuredItem.quality).toEqual(0);
  });
});
