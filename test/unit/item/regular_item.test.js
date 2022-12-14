const RegularItem = require("../../../src/items/regular_item");

describe("`RegularItem` - child class of `Item`", () => {
  it("updateItemSellIn() updates item's sellIn value", () => {
    const regularItem = new RegularItem("Regular Item", 10, 50);

    expect(regularItem.name).toEqual("Regular Item");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(9);
  });

  it("updateItemSellIn() cannot decrease an item's sellIn value lower than zero", () => {
    const regularItem = new RegularItem("Regular Item", 0, 50);

    expect(regularItem.name).toEqual("Regular Item");
    expect(regularItem.sellIn).toEqual(0);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(0);
  });

  it("updateItemQuality() updates item's quality value correctly before sell by date ", () => {
    const regularItem = new RegularItem("Regular Item", 10, 50);

    expect(regularItem.name).toEqual("Regular Item");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemQuality();
    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(9);
    expect(regularItem.quality).toEqual(49);
  });

  it("updateItemQuality() updates item's quality value correctly after sell by date ", () => {
    const regularItem = new RegularItem("Regular Item", 0, 50);

    expect(regularItem.name).toEqual("Regular Item");
    expect(regularItem.sellIn).toEqual(0);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemQuality();
    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(0);
    expect(regularItem.quality).toEqual(48);
  });

  it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
    const regularItem = new RegularItem("Regular Item", 10, 0);

    expect(regularItem.name).toEqual("Regular Item");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(0);

    regularItem.updateItemQuality();
    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(9);
    expect(regularItem.quality).toEqual(0);
  });

  // Future: Add tests for maximum quality value if this
  // class ever has conditions for increasing item quality
});
