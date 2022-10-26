// Do not alter this `Item` class
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class RegularItem extends Item {
  test() {
    return `I am a ${this.name}!`;
  }
}

// WIP: Refactor to export a list of classes
module.exports = Item;
module.exports = RegularItem;
