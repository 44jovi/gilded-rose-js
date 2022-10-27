const Item = require("./item");

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

module.exports = RegularItem;
