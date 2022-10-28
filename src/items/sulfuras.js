const Item = require("./item");

class Sulfuras extends Item {
  // Sulfuras is a legendary item:
  // Permanent quality value of 80
  // Sell by date never changes (stays at 0)

  updateItemSellIn() {
    this.sellIn = 0;
  }
  updateItemQuality() {
    this.quality = 80;
  }
}

module.exports = Sulfuras;
