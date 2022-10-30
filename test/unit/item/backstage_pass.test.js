const BackstagePass = require("../../../src/items/backstage_pass");

describe("`BackstagePass` - child class of `RegularItem`", () => {
  it("updateItemSellIn() updates `sellIn` value", () => {
    const backstagePass = new BackstagePass("Backstage Pass", 20, 30);

    expect(backstagePass.name).toEqual("Backstage Pass");
    expect(backstagePass.sellIn).toEqual(20);
    expect(backstagePass.quality).toEqual(30);

    backstagePass.updateItemSellIn();

    expect(backstagePass.sellIn).toEqual(19);
  });

  it("updateItemSellIn() cannot decrease `sellIn` value lower than zero", () => {
    const backstagePass = new BackstagePass("Backstage Pass", 0, 30);

    expect(backstagePass.name).toEqual("Backstage Pass");
    expect(backstagePass.sellIn).toEqual(0);
    expect(backstagePass.quality).toEqual(30);

    backstagePass.updateItemSellIn();

    expect(backstagePass.sellIn).toEqual(0);
  });

  it("updateItemQuality() decreases `quality` by 1 while `sellIn` is > 10", () => {
    const backstagePass = new BackstagePass("Backstage Pass", 20, 30);

    expect(backstagePass.name).toEqual("Backstage Pass");
    expect(backstagePass.sellIn).toEqual(20);
    expect(backstagePass.quality).toEqual(30);

    backstagePass.updateItemQuality();
    backstagePass.updateItemSellIn();

    expect(backstagePass.sellIn).toEqual(19);
    expect(backstagePass.quality).toEqual(29);
  });

  it("updateItemQuality() increases `quality` by more than 1 based on `sellIn` value. Max quality = 50", () => {
    // Scenario 1
    // While item `sellIn` value <= 10 and > 5
    const backstagePass1 = new BackstagePass("Backstage Pass 1", 10, 48);

    expect(backstagePass1.name).toEqual("Backstage Pass 1");
    expect(backstagePass1.sellIn).toEqual(10);
    expect(backstagePass1.quality).toEqual(48);

    backstagePass1.updateItemQuality();
    backstagePass1.updateItemSellIn();

    // Quality increases by 2
    expect(backstagePass1.sellIn).toEqual(9);
    expect(backstagePass1.quality).toEqual(50);

    // Scenario 2
    // While item `sellIn` value <= 5 and >= 0
    const backstagePass2 = new BackstagePass("Backstage Pass 2", 5, 47);

    expect(backstagePass2.name).toEqual("Backstage Pass 2");
    expect(backstagePass2.sellIn).toEqual(5);
    expect(backstagePass2.quality).toEqual(47);

    backstagePass2.updateItemQuality();
    backstagePass2.updateItemSellIn();

    // Quality increases by 3
    expect(backstagePass2.sellIn).toEqual(4);
    expect(backstagePass2.quality).toEqual(50);

    backstagePass2.updateItemQuality();
    backstagePass2.updateItemSellIn();

    expect(backstagePass2.sellIn).toEqual(3);
    // Quality does not go over 50
    expect(backstagePass2.quality).toEqual(50);
  });

  it("updateItemQuality() changes `quality` to 0 when `sellIn` value <= 0", () => {
    const backstagePass = new BackstagePass("Backstage Pass 1", 1, 50);

    expect(backstagePass.name).toEqual("Backstage Pass 1");
    expect(backstagePass.sellIn).toEqual(1);
    expect(backstagePass.quality).toEqual(50);

    // Update 1
    backstagePass.updateItemQuality();
    backstagePass.updateItemSellIn();

    expect(backstagePass.sellIn).toEqual(0);
    expect(backstagePass.quality).toEqual(0);

    // Update 2
    backstagePass.updateItemQuality();
    backstagePass.updateItemSellIn();

    expect(backstagePass.sellIn).toEqual(0);
    // Quality changes to 0
    expect(backstagePass.quality).toEqual(0);
  });
});
