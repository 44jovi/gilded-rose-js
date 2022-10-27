class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateItemQuality();
      item.updateItemSellIn();
    });
    return this.items;
  }
}

module.exports = Shop;
