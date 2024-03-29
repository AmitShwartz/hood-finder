import { AxiosError } from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { FetchNeighborhoodsParams } from "../../api/neighborhood/neighborhood.api.interface";
import neighborhoodService from "../../services/neighborhood.service";
import { Neighborhood } from "../../types";
import { buildFetchNeighborhoodsQueryKey } from "../../utils/useQuery.utils";
import useOnServerError from "./useOnServerError";

const FIVE_MINUTES = 5 * 60 * 1000;

const useFetchNeighborhoods = ({
  searchTerm,
  ageRange,
  maxDistance,
  sortBy,
}: FetchNeighborhoodsParams) => {
  const { onError } = useOnServerError();

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

  const { data, isLoading, error, refetch } = useQuery<
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
    onError,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetchNeighborhoods;
