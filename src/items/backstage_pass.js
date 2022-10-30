const RegularItem = require("./regular_item");

class BackstagePass extends RegularItem {
  updateItemSellIn() {
    super.updateItemSellIn();

    // Ensure inventory is updated with the quality as zero
    if (this.sellIn === 0) {
      this.quality = 0;
    }
  }

  updateItemQuality() {
    // Backstage passes item quality changes differently to regular items

    // Future: refactor to improve clarity

    // If 0 days left to sell
    if (this.sellIn <= 0) {
      this.quality = 0;
    }

    // Normal decrement while more than 10 days left to sell
    if (this.sellIn > 10) {
      this.quality -= 1;
      // If 10 or less days left to sell
    } else if (this.sellIn > 5) {
      this.quality += 2;
      // If 5 or less days left to sell
    } else if (this.sellIn > 0) {
      this.quality += 3;
    }

    // Maximum quality value = 50
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

module.exports = BackstagePass;
