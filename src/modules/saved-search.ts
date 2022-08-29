import { isUndefined, omitBy } from "lodash";

export type SavedSearch = {
  listingType: "rent" | "sell";
  countyIds: string[];
  propertyTypes: ("house" | "land" | "condo" | "townhome")[];
};

const diffString = (before: string, after: string) => {
  if (before === after) return undefined;
  return { before, after };
};

const diff = (before: SavedSearch, after: SavedSearch) => {
  const result = {
    listingType: diffString(before.listingType, after.listingType),
  };
  return omitBy(result, isUndefined);
};

const ModSavedSearch = {
  diff,
};

export default ModSavedSearch;
