import axios from "axios";
import Config from "react-native-config";

// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default axiosInstance;
