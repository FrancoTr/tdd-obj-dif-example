import ModSavedSearch, { SavedSearch } from "./saved-search";

const buildSavedSearch = (): SavedSearch => ({
  listingType: "sell",
  countyIds: [],
  propertyTypes: ["house"],
});
describe("SavedSearch", () => {
  test("detect changes on string values", () => {
    const before: SavedSearch = { ...buildSavedSearch(), listingType: "sell" };
    const after: SavedSearch = { ...buildSavedSearch(), listingType: "rent" };

    const result = {
      listingType: {
        before: "sell",
        after: "rent",
      },
    };
    expect(ModSavedSearch.diff(before, after)).toEqual(result);
  });
});
