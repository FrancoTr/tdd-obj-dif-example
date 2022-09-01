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
  };
};

type DiffableObject = Record<string, string | string[]>;

const diff = <TObject extends DiffableObject>(before: TObject, after: TObject) => {
  /* const result = {
    listingType: diffString(before.listingType, after.listingType),
    countyIds: diffArray(before.countyIds, after.countyIds),
    propertyTypes: diffArray(before.propertyTypes, after.propertyTypes)
  }; */

  const entries = Object.entries(before).map(([key, value]) => {
    if (typeof value === 'string') return [key, diffString(value, after[key] as string)];
    return [key, diffArray(value, after[key] as string[])];
  });
  const result = Object.fromEntries(entries);

  return omitBy(result, isUndefined);
};

const ModSavedSearch = {
  diff,
};

export default ModSavedSearch;
