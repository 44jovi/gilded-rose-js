// Heed the well-known advice:
// **Do not** alter this `Item` class
// Or it could get messy with the Goblin in the corner of the inn...
// You have been warned.
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Future: Consider splitting child classes into separate files

// Child class - "Regular Item" - default rules for how its `sellIn` and `quality` updates
class RegularItem extends Item {
  updateItemSellIn() {
    // If sell by date is already zero
    if (this.sellIn <= 0) {
      this.sellIn = 0;
      // Otherwise continue with decrement
    } else {
      this.sellIn -= 1;
    }
  }

  updateItemQuality() {
    // If quality is already zero
    if (this.quality <= 0) {
      this.quality = 0;
      // Before sell by date
    } else if (this.sellIn > 0) {
      this.quality -= 1;
      // After sell by date
    } else {
      this.quality -= 2;
    }
  }
}

// Child class - "Aged Brie" - `quality` increases over time
// Future: consider making this a child class of RegularItem

class AgedBrie extends Item {
  updateItemSellIn() {
    // If sell by date is already zero
    if (this.sellIn <= 0) {
      this.sellIn = 0;
      // Otherwise continue with decrement
    } else {
      this.sellIn -= 1;
    }
  }

  updateItemQuality() {
    // If quality is already zero
    if (this.quality <= 0) {
      this.quality = 0;
      // Before sell by date
    } else if (this.sellIn > 0) {
      this.quality -= 1;
      // After sell by date
    } else {
      this.quality -= 2;
    }
  }
}

// Add child classes for:
// - BackstagePasses
// - Sulfuras
// - ConjuredItem - this could be a child class of RegularItem

// WIP: Refactor to export a list of classes
module.exports = Item;
module.exports = RegularItem;
module.exports = AgedBrie;
