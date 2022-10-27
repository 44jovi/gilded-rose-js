const Item = require("../src/item");
const RegularItem = require("../src/item");

// Future: Separate tests for child classes into different files
// Future: use beforeEach() to create Item child class instances where appropriate

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
    it("updateItemSellIn() updates item's sellIn value", () => {
      regularItem = new RegularItem("Regular Item 1", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 1");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemSellIn();

      expect(regularItem.sellIn).toEqual(9);
    });

    it("updateItemSellIn() cannot decrease an item's sell by date lower than zero", () => {
      regularItem = new RegularItem("Regular Item 1", 0, 50);

      expect(regularItem.name).toEqual("Regular Item 1");
      expect(regularItem.sellIn).toEqual(0);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemSellIn();

      expect(regularItem.sellIn).toEqual(0);
    });

    it("updateItemQuality() updates item's quality value correctly before sell by date ", () => {
      regularItem = new RegularItem("Regular Item 2", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 2");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(49);
    });

    it("updateItemQuality() updates item's quality value correctly after sell by date ", () => {
      regularItem = new RegularItem("Regular Item 3", 0, 50);

      expect(regularItem.name).toEqual("Regular Item 3");
      expect(regularItem.sellIn).toEqual(0);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(48);
    });

    it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
      regularItem = new RegularItem("Regular Item 4", 10, 0);

      expect(regularItem.name).toEqual("Regular Item 4");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(0);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(0);
    });
  });
});
