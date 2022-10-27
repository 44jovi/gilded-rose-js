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

// WIP: child classes:
// - BackstagePasses
// - Sulfuras
// - ConjuredItem - this could be a child class of RegularItem

module.exports = Item;
