const RegularItem = require("./regular_item");

class AgedBrie extends RegularItem {
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
