const Shop = require("../src/shop");
const RegularItem = require("../src/item");

// Future: use manual or Jest mocks for Item objects
// Future: use beforeEach() to reduce code unnecessary code repetition

describe("Item", () => {
  describe("updateQuality()", () => {
    it("updates a regular item's quality correctly before its sell by date", () => {
      mockRegularItem1 = new RegularItem("Regular Item 1", 10, 50);

      console.log(mockRegularItem1);
      expect(mockRegularItem1.name).toEqual("Regular Item 1");
      expect(mockRegularItem1.sellIn).toEqual(10);
      expect(mockRegularItem1.quality).toEqual(50);
      items = shop = new Shop([mockRegularItem1]);

      expect(shop.updateQuality()[0].name).toEqual("Regular Item 1");
    });
  });
});
