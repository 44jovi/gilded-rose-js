const RegularItem = require("../../../src/items/regular_item");
const Shop = require("../../../src/shop");

jest.mock("../../../src/items/regular_item");

describe("Shop", () => {
  describe("updateQuality()", () => {
    it("updates array of items and returns the updated array", () => {
      const mockRegularItem1 = new RegularItem();
      mockRegularItem1.updateItemQuality.mockImplementation(() => {});
      mockRegularItem1.updateItemSellIn.mockImplementation(() => {});

      const mockRegularItem2 = new RegularItem();
      mockRegularItem2.updateItemQuality.mockImplementation(() => {});
      mockRegularItem2.updateItemSellIn.mockImplementation(() => {});

      const shop = new Shop([mockRegularItem1, mockRegularItem2]);

      const result = shop.updateQuality();

      // Assert each item's own methods have been called
      expect(mockRegularItem1.updateItemQuality).toHaveBeenCalledTimes(1);
      expect(mockRegularItem1.updateItemSellIn).toHaveBeenCalledTimes(1);

      expect(mockRegularItem2.updateItemQuality).toHaveBeenCalledTimes(1);
      expect(mockRegularItem2.updateItemSellIn).toHaveBeenCalledTimes(1);

      // Assert returned array is correct
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual(mockRegularItem1);
      expect(result[1]).toEqual(mockRegularItem2);
    });
  });
});
