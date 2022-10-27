const RegularItem = require("../../../src/items/regular_item");

describe("`RegularItem` - child class of `Item`", () => {
  it("updateItemSellIn() updates item's sellIn value", () => {
    const regularItem = new RegularItem("Regular Item 1", 10, 50);

    expect(regularItem.name).toEqual("Regular Item 1");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(9);
  });

  it("updateItemSellIn() cannot decrease an item's sellIn value lower than zero", () => {
    const regularItem = new RegularItem("Regular Item 1", 0, 50);

    expect(regularItem.name).toEqual("Regular Item 1");
    expect(regularItem.sellIn).toEqual(0);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemSellIn();

    expect(regularItem.sellIn).toEqual(0);
  });

  it("updateItemQuality() updates item's quality value correctly before sell by date ", () => {
    const regularItem = new RegularItem("Regular Item 2", 10, 50);

    expect(regularItem.name).toEqual("Regular Item 2");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemQuality();

    expect(regularItem.quality).toEqual(49);
  });

  it("updateItemQuality() updates item's quality value correctly after sell by date ", () => {
    const regularItem = new RegularItem("Regular Item 3", 0, 50);

    expect(regularItem.name).toEqual("Regular Item 3");
    expect(regularItem.sellIn).toEqual(0);
    expect(regularItem.quality).toEqual(50);

    regularItem.updateItemQuality();

    expect(regularItem.quality).toEqual(48);
  });

  it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
    const regularItem = new RegularItem("Regular Item 4", 10, 0);

    expect(regularItem.name).toEqual("Regular Item 4");
    expect(regularItem.sellIn).toEqual(10);
    expect(regularItem.quality).toEqual(0);

    regularItem.updateItemQuality();

    expect(regularItem.quality).toEqual(0);
  });

  // Future: Add tests for maximum quality value (e.g. max. 50) if the RegularItem
  // class ever needs to increase a regular item's quality in future
});
