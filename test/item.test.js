const Item = require("../src/item");
const RegularItem = require("../src/item");
const AgedBrie = require("../src/item");

// Future: Separate tests for child classes into different files
// Future: use beforeEach() to create Item child class instances where appropriate

// PARENT CLASS

describe("Item", () => {
  describe("parent class `Item`", () => {
    it("parent class object properties", () => {
      const item = new Item("Rubber Duck", 99, 99);

      expect(item.name).toEqual("Rubber Duck");
      expect(item.sellIn).toEqual(99);
      expect(item.quality).toEqual(99);
    });
  });

  // CHILD CLASSES

  // Child class - RegularItem
  describe("child class `RegularItem`", () => {
    it("updateItemSellIn() updates item's sellIn value", () => {
      const regularItem = new RegularItem("Regular Item 1", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 1");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemSellIn();

      expect(regularItem.sellIn).toEqual(9);
    });

    it("updateItemSellIn() cannot decrease an item's sell by date lower than zero", () => {
      const regularItem = new RegularItem("Regular Item 1", 0, 50);

      expect(regularItem.name).toEqual("Regular Item 1");
      expect(regularItem.sellIn).toEqual(0);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemSellIn();

      expect(regularItem.sellIn).toEqual(0);
    });

    it("updateItemQuality() updates item's quality value correctly before sell by date ", () => {
      const regularItem = new RegularItem("Regular Item 2", 10, 50);

      expect(regularItem.name).toEqual("Regular Item 2");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(49);
    });

    it("updateItemQuality() updates item's quality value correctly after sell by date ", () => {
      const regularItem = new RegularItem("Regular Item 3", 0, 50);

      expect(regularItem.name).toEqual("Regular Item 3");
      expect(regularItem.sellIn).toEqual(0);
      expect(regularItem.quality).toEqual(50);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(48);
    });

    it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
      const regularItem = new RegularItem("Regular Item 4", 10, 0);

      expect(regularItem.name).toEqual("Regular Item 4");
      expect(regularItem.sellIn).toEqual(10);
      expect(regularItem.quality).toEqual(0);

      regularItem.updateItemQuality();

      expect(regularItem.quality).toEqual(0);
    });

    // Future: Add tests for maximum quality value (e.g. max. 50) if the RegularItem
    // class ever needs to increase a regular item's quality in future
  });

  // Child class - AgedBrie
  describe("child class `AgedBrie`", () => {
    it("updateItemSellIn() updates item's sellIn value", () => {
      const agedBrie = new AgedBrie("Aged Brie", 10, 50);

      expect(agedBrie.name).toEqual("Aged Brie");
      expect(agedBrie.sellIn).toEqual(10);

      agedBrie.updateItemSellIn();

      expect(agedBrie.sellIn).toEqual(9);
    });
  });
  it("updateItemQuality() cannot decrease an item's quality lower than zero", () => {
    const agedBrie = new AgedBrie("Aged Brie", 0, 50);

    expect(agedBrie.name).toEqual("Aged Brie");
    expect(agedBrie.sellIn).toEqual(0);

    agedBrie.updateItemSellIn();

    expect(agedBrie.sellIn).toEqual(0);
  });

  // Add test for quality increment over time
});
