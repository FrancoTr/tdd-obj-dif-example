export type SavedSearch = {
  listingType: "rent" | "sell";
  countyIds: string[];
  propertyTypes: ("house" | "land" | "condo" | "townhome")[];
};

const diff = (before: SavedSearch, after: SavedSearch) => {};

const ModSavedSearch = {
  diff,
};

export default ModSavedSearch;
