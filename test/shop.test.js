const Item = require("../src/item");
const Shop = require("../src/shop");

jest.mock("../src/item");

describe("Shop", () => {
  describe("updateQuality()", () => {
    it("updates array of items and returns the updated array", () => {
      const mockItem1 = new Item();
      mockItem1.updateItemQuality.mockImplementation(() => {});
      mockItem1.updateItemSellIn.mockImplementation(() => {});

      const mockItem2 = new Item();
      mockItem2.updateItemQuality.mockImplementation(() => {});
      mockItem2.updateItemSellIn.mockImplementation(() => {});

      const shop = new Shop([mockItem1, mockItem2]);

      const result = shop.updateQuality();

      // Assert that each item's own methods have been called
      expect(mockItem1.updateItemQuality).toHaveBeenCalledTimes(1);
      expect(mockItem1.updateItemSellIn).toHaveBeenCalledTimes(1);

      expect(mockItem2.updateItemQuality).toHaveBeenCalledTimes(1);
      expect(mockItem2.updateItemSellIn).toHaveBeenCalledTimes(1);

      // Assert that returned array is correct
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual(mockItem1);
      expect(result[1]).toEqual(mockItem2);
    });
  });
});
