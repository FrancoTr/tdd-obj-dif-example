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
    expect(ModSavedSearch.diff(before, after)).toMatchObject(result);
  });

  test("ignores equal string values", () => {
    const before: SavedSearch = buildSavedSearch();
    const after: SavedSearch = buildSavedSearch();

    const result = {};
    expect(ModSavedSearch.diff(before, after)).toMatchObject(result);
  });

  test("detect removals from array values", () => {
    const before: SavedSearch = { ...buildSavedSearch(), countyIds: ['id-1'] };
    const after: SavedSearch = { ...buildSavedSearch(), countyIds: [] };

    const result = {
      countyIds: {
        added: [],
        removed: ['id-1'],
      },
    };
    expect(ModSavedSearch.diff(before, after)).toMatchObject(result);
  });

  test("detect additions from array values", () => {
    const before: SavedSearch = { ...buildSavedSearch(), countyIds: [] };
    const after: SavedSearch = { ...buildSavedSearch(), countyIds: ['id-1'] };

    const result = {
      countyIds: {
        added: ['id-1'],
        removed: [],
      },
    };
    expect(ModSavedSearch.diff(before, after)).toMatchObject(result);
  });
});


