const Sulfuras = require("../../../src/items/sulfuras");

describe("`Sulfuras` - child class of `Item`", () => {
  it("updateItemSellIn() does not update `sellIn` value", () => {
    const sulfuras = new Sulfuras("Sulfuras", 999, 80);

    expect(sulfuras.name).toEqual("Sulfuras");
    expect(sulfuras.sellIn).toEqual(999);
    expect(sulfuras.quality).toEqual(80);

    sulfuras.updateItemSellIn();

    expect(sulfuras.sellIn).toEqual(999);
  });

  it("updateItemQuality() does not update `quality` value", () => {
    const sulfuras = new Sulfuras("Sulfuras", 999, 80);

    expect(sulfuras.name).toEqual("Sulfuras");
    expect(sulfuras.sellIn).toEqual(999);
    expect(sulfuras.quality).toEqual(80);

    sulfuras.updateItemQuality();
    sulfuras.updateItemSellIn();

    expect(sulfuras.sellIn).toEqual(999);
    expect(sulfuras.quality).toEqual(80);
  });
});
