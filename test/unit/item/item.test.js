const Item = require("../../../src/items/item");

describe("Item", () => {
  describe("`Item` - parent class", () => {
    it("parent class object properties", () => {
      const item = new Item("Rubber Duck", 99, 99);

      expect(item.name).toEqual("Rubber Duck");
      expect(item.sellIn).toEqual(99);
      expect(item.quality).toEqual(99);
    });
  });
});
