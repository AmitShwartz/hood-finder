import { AxiosError } from "axios";
import { useCallback } from "react";
import { Alert } from "react-native";

const useOnServerError = () => {
  const onError = useCallback((error: AxiosError) => {
    Alert.alert("Error", error.message);
  }, []);

  return {
    onError,
  };
};

export default useOnServerError;
