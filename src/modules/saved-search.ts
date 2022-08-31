import { difference, isUndefined, omitBy } from "lodash";

export type SavedSearch = {
  listingType: "rent" | "sell";
  countyIds: string[];
  propertyTypes: ("house" | "land" | "condo" | "townhome")[];
};

const diffString = (before: string, after: string) => {
  if (before === after) return undefined;
  return { before, after };
};

const diffArray = (before: string[], after: string[]) => {
  return {
    added: difference(after, before),
    removed: difference(before, after)
  }
}

const diff = (before: SavedSearch, after: SavedSearch) => {
  const result = {
    listingType: diffString(before.listingType, after.listingType),
    countyIds: diffArray(before.countyIds, after.countyIds),
    propertyTypes: diffArray(before.propertyTypes, after.propertyTypes)
  };
  return omitBy(result, isUndefined);
};

const ModSavedSearch = {
  diff,
};

export default ModSavedSearch;
