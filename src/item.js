// **Do not** alter this `Item` class
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Future: Consider splitting child classes into separate files

// Regular Item - default rules for how its `sellIn` and `quality` updates
class RegularItem extends Item {
  updateItemSellIn() {
    this.sellIn -= 1;
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

// WIP: Refactor to export a list of classes
module.exports = Item;
module.exports = RegularItem;
