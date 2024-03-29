import { useQuery } from "react-query";
import neighborhoodService from "../../services/neighborhood.service";
import { sortOption } from "../../api/neighborhood/neighborhood.api.interface";
import { AxiosError } from "axios";
import useOnServerError from "./useOnServerError";

const useFetchNeighborhoodSortOptions = () => {
  const { onError } = useOnServerError();

  const { data, isFetching, error } = useQuery<sortOption, AxiosError>({
    queryKey: ["neighborhoods_sortOptions"],
    queryFn: () => neighborhoodService.fetchNeighborhoodSortOptions(),
    staleTime: Infinity,
    onError,
  });

  return {
    data,
    isFetching,
    error,
  };
};

export default useFetchNeighborhoodSortOptions;
