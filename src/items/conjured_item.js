const RegularItem = require("./regular_item");
class ConjuredItem extends RegularItem {
  updateItemQuality() {
    // Conjured items value decreases twice as fast as regular items

    // If quality is already zero
    if (this.quality <= 0) {
      this.quality = 0;
      // Before sell by date
    } else if (this.sellIn > 0) {
      this.quality -= 2;
      // After sell by date
    } else {
      this.quality -= 4;
    }
  }
}

module.exports = ConjuredItem;
