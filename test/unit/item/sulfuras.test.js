const Sulfuras = require("../../../src/items/sulfuras");

describe("`Sulfuras` - child class of `Item`", () => {
  it("updateItemSellIn() defaults `sellIn` value to 0", () => {
    const sulfuras = new Sulfuras("Sulfuras", 100, 80);

    expect(sulfuras.name).toEqual("Sulfuras");
    expect(sulfuras.sellIn).toEqual(100);
    expect(sulfuras.quality).toEqual(80);

    sulfuras.updateItemSellIn();

    expect(sulfuras.sellIn).toEqual(0);
  });

  it("updateItemQuality() does not update `quality` value", () => {
    const sulfuras = new Sulfuras("Sulfuras", 100, 80);

    expect(sulfuras.name).toEqual("Sulfuras");
    expect(sulfuras.sellIn).toEqual(100);
    expect(sulfuras.quality).toEqual(80);

    sulfuras.updateItemQuality();
    sulfuras.updateItemSellIn();

    expect(sulfuras.sellIn).toEqual(0);
    expect(sulfuras.quality).toEqual(80);
  });
});
