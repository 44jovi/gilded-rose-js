const Item = require("./item");

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
    // Aged Brie item quality increases in value over time
    // Need inn owners to clarify the following is the desired behaviour!

    // If quality value is between 0 and 50 (inclusive)
    if (this.quality >= 0 && this.quality < 50) {
      // And is before sell by date
      if (this.sellIn > 0) {
        // Quality value increases
        this.quality += 1;
      }
    }
    // Otherwise quality value remains unchanged
  }
}

module.exports = AgedBrie;
