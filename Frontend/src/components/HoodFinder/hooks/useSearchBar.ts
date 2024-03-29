import { useDebouncedCallback } from "use-debounce";
import useFormStore from "../../../hooks/stores/useFormStore";

const useSearchBar = () => {
  const { setSearchTerm } = useFormStore();
  const onChange = useDebouncedCallback((value: string) => {
    setSearchTerm(value);
  }, 300);

  return { onChange };
};

export default useSearchBar;
