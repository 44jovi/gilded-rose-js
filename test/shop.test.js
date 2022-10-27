const Shop = require("../src/shop");
const RegularItem = require("../src/item");
const { default: expect } = require("expect");

// Future: use manual or Jest mocks for Item objects
// Future: use beforeEach() to reduce code unnecessary code repetition

describe("Shop", () => {
  describe("updateQuality()", () => {
    it("updates a regular item's quality correctly before its sell by date", () => {
      regularItem1 = new RegularItem("Regular Item 1", 10, 50);

      items = shop = new Shop([regularItem1]);

      expect(regularItem1.name).toEqual("Regular Item 1");
      expect(regularItem1.sellIn).toEqual(10);
      expect(regularItem1.quality).toEqual(50);

      result = shop.updateQuality();

      expect(result[0].name).toEqual("Regular Item 1");
      expect(result[0].sellIn).toEqual(9);
      expect(result[0].quality).toEqual(49);
    });
  });
});
