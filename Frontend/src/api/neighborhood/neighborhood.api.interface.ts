import { AxiosResponse } from "axios";
import { Neighborhood } from "../../types";

export type FetchNeighborhoodsParams = {
  searchTerm?: string;
  ageRange?: [number, number];
  maxDistance?: number;
  sortBy?: [string, string];
};

export type sortOption = {
  fieldOptions: string[];
  sortOptions: string[];
};

interface INeighborhoodApi {
  fetchNeighborhoods: (
    params: FetchNeighborhoodsParams
  ) => Promise<AxiosResponse<Neighborhood[], any>>;

  fetchNeighborhoodSortOptions: () => Promise<AxiosResponse<sortOption, any>>;
}

export default INeighborhoodApi;
