const Shop = require("../../src/shop");
const RegularItem = require("../../src/items/regular_item");
const AgedBrie = require("../../src/items/aged_brie");
const ConjuredItem = require("../../src/items/conjured_item");
const Sulfuras = require("../../src/items/sulfuras");
const BackstagePass = require("../../src/items/backstage_pass");

const items = [
  new RegularItem("Regular Item One", 100, 50),
  new RegularItem("Regular Item Two", 0, 50),
  new AgedBrie("Aged Brie One", 10, 49),
  new AgedBrie("Aged Brie Two", 0, 10),
  new ConjuredItem("Conjured Mana Cake One", 100, 50),
  new ConjuredItem("Conjured Mana Cake Two", 0, 50),
  new Sulfuras("Sulfuras, Hand of Ragnaros One", 0, 50),
  new Sulfuras("Sulfuras, Hand of Ragnaros Two", 100, 100),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 20, 50),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 46),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 44),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 2, 50),
];

const days = Number(process.argv[3]) || 3;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach((item) =>
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
  );
  gildedRose.updateQuality();
}
