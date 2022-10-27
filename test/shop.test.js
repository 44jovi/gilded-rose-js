const Shop = require("../src/shop");
const RegularItem = require("../src/item");

// Future: use manual or Jest mocks for Item objects
// Future: use beforeEach() to reduce code unnecessary code repetition

describe("Item", () => {
  describe("updateQuality()", () => {
    it("constructor takes array of Item objects", () => {
      mockRegularItem1 = new RegularItem("Regular Item 1", 10, 50);
      mockRegularItem2 = new RegularItem("Regular Item 2", 5, 25);

      items = shop = new Shop([mockRegularItem1, mockRegularItem2]);

      expect(shop.updateQuality()[0].name).toEqual("Regular Item 1");
      expect(shop.updateQuality()[0].sellIn).toEqual(10);
      expect(shop.updateQuality()[0].quality).toEqual(50);

      expect(shop.updateQuality()[1].name).toEqual("Regular Item 2");
      expect(shop.updateQuality()[1].sellIn).toEqual(5);
      expect(shop.updateQuality()[1].quality).toEqual(25);
    });
  });
});
