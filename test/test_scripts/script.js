const Shop = require("../../src/shop");
const RegularItem = require("../../src/items/regular_item");

const items = [
  new RegularItem("Regular Item One", 100, 50),
  new RegularItem("Regular Item One", 0, 50),
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
