import { useStore } from "../../stores/setupContext";

const useFormStore = () => {
  const { form } = useStore();
  return form;
};

export default useFormStore;
