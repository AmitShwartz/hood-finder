import neighborhoodApi from "../api/neighborhood/neighborhood.api";
import INeighborhoodApi, {
  FetchNeighborhoodsParams,
  sortOption,
} from "../api/neighborhood/neighborhood.api.interface";
import { Neighborhood } from "../types";

class NeighborhoodService {
  private api: INeighborhoodApi;
  constructor(api: INeighborhoodApi) {
    this.api = api;
  }

  async fetchNeighborhoods(
    params: FetchNeighborhoodsParams
  ): Promise<Neighborhood[]> {
    if ((params.searchTerm?.length ?? 0) < 3) {
      return [];
    }
    return (await this.api.fetchNeighborhoods(params)).data;
  }

  async fetchNeighborhoodSortOptions(): Promise<sortOption> {
    return (await this.api.fetchNeighborhoodSortOptions()).data;
  }
}

const neighborhoodService = new NeighborhoodService(neighborhoodApi);

export default neighborhoodService;
