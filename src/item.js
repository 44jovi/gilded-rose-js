// Do not alter this `Item` class
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Future: Consider splitting child classes into separate files
class RegularItem extends Item {
  updateItemSellIn() {
    this.sellIn -= 1;
  }

  updateItemQuality() {
    this.quality -= 1;
  }
}

// WIP: Refactor to export a list of classes
module.exports = Item;
module.exports = RegularItem;
