import useFetchNeighborhoods from "../../../hooks/server/useFetchNeighborhoods";
import useOnServerError from "../../../hooks/server/useOnServerError";
import useFormStore from "../../../hooks/stores/useFormStore";

const useFetchNeighborhoodsOnChange = () => {
  const { searchTerm, ageRange, maxDistance, sortBy } = useFormStore();

  const { data, isLoading } = useFetchNeighborhoods({
    searchTerm,
    ageRange,
    maxDistance,
    sortBy,
  });

  return {
    neighborhoods: data,
    isLoading,
  };
};

export default useFetchNeighborhoodsOnChange;
