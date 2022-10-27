const Item = require("../src/item");
const RegularItem = require("../src/item");

// Future: Separate tests for child classes into different files

describe("Item", () => {
  describe("parent class `Item`", () => {
    it("parent class object properties", () => {
      item = new Item("Rubber Duck", 99, 99);

      expect(item.name).toEqual("Rubber Duck");
      expect(item.sellIn).toEqual(99);
      expect(item.quality).toEqual(99);
    });
  });

  describe("child class `RegularItem`", () => {
    it("updateSellIn() updates item's sellIn value", () => {
      regularItem = new RegularItem("Regular Item 1", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 1");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateSellIn();

      expect(regularItem.sellIn).toEqual(9);
    });

    it("updateQuality() updates item's quality value", () => {
      regularItem = new RegularItem("Regular Item 2", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 2");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      // Just decrease quality value by 1 until we add rules
      regularItem.updateQuality();

      expect(regularItem.quality).toEqual(49);
    });
  });
});
