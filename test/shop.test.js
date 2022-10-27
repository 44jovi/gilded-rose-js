const Shop = require("../src/shop");
const RegularItem = require("../src/item");

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

      // Shop inventory: Day 0
      result = shop.updateQuality();

      expect(result[0].name).toEqual("Regular Item 1");
      expect(result[0].sellIn).toEqual(9);
      expect(result[0].quality).toEqual(49);

      // Shop inventory: Day 1
      result = shop.updateQuality();

      expect(result[0].name).toEqual("Regular Item 1");
      expect(result[0].sellIn).toEqual(8);
      expect(result[0].quality).toEqual(48);
    });
  });

  it("updates a regular item's quality correctly after its sell by date", () => {
    regularItem1 = new RegularItem("Regular Item 1", 0, 50);

    items = shop = new Shop([regularItem1]);

    expect(regularItem1.name).toEqual("Regular Item 1");
    expect(regularItem1.sellIn).toEqual(0);
    expect(regularItem1.quality).toEqual(50);

    // Shop inventory: Day 0
    result = shop.updateQuality();

    expect(result[0].name).toEqual("Regular Item 1");
    expect(result[0].sellIn).toEqual(0);
    expect(result[0].quality).toEqual(48);

    // Shop inventory: Day 1
    result = shop.updateQuality();

    expect(result[0].name).toEqual("Regular Item 1");
    expect(result[0].sellIn).toEqual(0);
    expect(result[0].quality).toEqual(46);
  });
});
