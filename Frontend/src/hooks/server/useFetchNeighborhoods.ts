import { useMemo } from "react";
import { useQuery } from "react-query";
import { FetchNeighborhoodsParams } from "../../api/neighborhood/neighborhood.api.interface";
import neighborhoodService from "../../services/neighborhood.service";
import { buildFetchNeighborhoodsQueryKey } from "../../utils/useQuery.utils";
import { Neighborhood } from "../../types";
import { AxiosError } from "axios";

const FIVE_MINUTES = 5 * 60 * 1000;

const useFetchNeighborhoods = ({
  searchTerm,
  ageRange,
  maxDistance,
  sortBy,
}: FetchNeighborhoodsParams) => {
  const queryKey = useMemo(
    () =>
      buildFetchNeighborhoodsQueryKey({
        searchTerm,
        ageRange,
        maxDistance,
        sortBy,
      }),
    [searchTerm, ageRange, maxDistance, sortBy]
  );

  const { data, isFetching, error, refetch } = useQuery<
    Neighborhood[],
    AxiosError
  >({
    queryKey,
    queryFn: () =>
      neighborhoodService.fetchNeighborhoods({
        searchTerm,
        ageRange,
        maxDistance,
        sortBy,
      }),
    staleTime: FIVE_MINUTES,
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};

export default useFetchNeighborhoods;
