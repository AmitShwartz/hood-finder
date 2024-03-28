import { useQuery } from "react-query";
import neighborhoodService from "../../services/neighborhood.service";
import { sortOption } from "../../api/neighborhood/neighborhood.api.interface";
import { AxiosError } from "axios";

const useFetchNeighborhoodSortOptions = () => {
  const { data, isFetching, error } = useQuery<sortOption, AxiosError>({
    queryKey: "neighborhoods/sortOptions",
    queryFn: neighborhoodService.fetchNeighborhoodSortOptions,
    staleTime: Infinity,
  });

  return {
    data,
    isFetching,
    error,
  };
};

export default useFetchNeighborhoodSortOptions;
