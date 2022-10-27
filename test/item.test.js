const Item = require("../src/item");
const RegularItem = require("../src/item");

describe("Item", () => {
  describe("parent class", () => {
    it("parent class object properties", () => {
      item = new Item("Rubber Duck", 99, 99);

      expect(item.name).toEqual("Rubber Duck");
      expect(item.sellIn).toEqual(99);
      expect(item.quality).toEqual(99);
    });
  });

  describe("child classes", () => {
    it("child class `RegularItem`", () => {
      regularItem = new RegularItem("Some Regular Item", 10, 50);

      expect(regularItem.name).toEqual("Some Regular Item");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateSellIn();

      expect(regularItem.sellIn).toEqual(9);
    });
  });
});
