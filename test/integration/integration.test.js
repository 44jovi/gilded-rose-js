const Item = require("../../src/item");
const Shop = require("../../src/shop");

describe("Gilded Rose", function () {
  xit("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});