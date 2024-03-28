import axiosInstance from "../axiosInstance";
import INeighborhoodApi, {
  FetchNeighborhoodsParams,
} from "./neighborhood.api.interface";

export class NeighborhoodApi implements INeighborhoodApi {
  fetchNeighborhoods(params: FetchNeighborhoodsParams) {
    return axiosInstance.get("/neighborhoods", {
      params,
    });
  }

  fetchNeighborhoodSortOptions() {
    return axiosInstance.get("/neighborhoods/sortOptions");
  }
}

const neighborhoodApi = new NeighborhoodApi();

export default neighborhoodApi;
