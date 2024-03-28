import { FetchNeighborhoodsParams } from "../api/neighborhood/neighborhood.api.interface";

export const buildFetchNeighborhoodsQueryKey = ({
  searchTerm,
  ageRange,
  maxDistance,
  sortBy,
}: FetchNeighborhoodsParams) => {
  const searchTermParam = searchTerm || "";
  const maxDistanceParam = maxDistance ? maxDistance.toString() : "";
  const ageRangeParam = ageRange ? ageRange.join("-") : "";
  const sortByParam = sortBy ? sortBy.join("-") : "";

  return [
    "neighborhoods",
    searchTermParam,
    ageRangeParam,
    maxDistanceParam,
    sortByParam,
  ];
};
