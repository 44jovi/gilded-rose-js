const Shop = require("../../src/shop");
const RegularItem = require("../../src/items/regular_item");

// Future: use beforeEach() to reduce code unnecessary code repetition

describe("Shop", () => {
  describe("updateQuality()", () => {
    it("updates a regular item's quality correctly before its sell by date", () => {
      const regularItem1 = new RegularItem("Regular Item", 10, 50);

      const shop = new Shop([regularItem1]);

      expect(regularItem1.name).toEqual("Regular Item");
      expect(regularItem1.sellIn).toEqual(10);
      expect(regularItem1.quality).toEqual(50);

      // Shop inventory: Day 0
      const result1 = shop.updateQuality();

      expect(result1[0].name).toEqual("Regular Item");
      expect(result1[0].sellIn).toEqual(9);
      expect(result1[0].quality).toEqual(49);

      // Shop inventory: Day 1
      const result2 = shop.updateQuality();

      expect(result2[0].name).toEqual("Regular Item");
      expect(result2[0].sellIn).toEqual(8);
      expect(result2[0].quality).toEqual(48);
    });
  });

  it("updates a regular item's quality correctly after its sell by date", () => {
    const regularItem1 = new RegularItem("Regular Item", 0, 50);

    const shop = new Shop([regularItem1]);

    expect(regularItem1.name).toEqual("Regular Item");
    expect(regularItem1.sellIn).toEqual(0);
    expect(regularItem1.quality).toEqual(50);

    // Shop inventory: Day 0
    const result1 = shop.updateQuality();

    expect(result1[0].name).toEqual("Regular Item");
    expect(result1[0].sellIn).toEqual(0);
    expect(result1[0].quality).toEqual(48);

    // Shop inventory: Day 1
    const result2 = shop.updateQuality();

    expect(result2[0].name).toEqual("Regular Item");
    expect(result2[0].sellIn).toEqual(0);
    expect(result2[0].quality).toEqual(46);
  });
});
