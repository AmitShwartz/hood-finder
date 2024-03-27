import { Op } from "sequelize";
import { Neighborhood } from "../types";
import db from "../utils/database";

interface NeighborhoodSearchParams {
  searchTerm?: string;
  ageRange?: [number, number];
  maxDistance?: number;
  sortBy?: [string, string];
}

const buildNeighborhoodsQuery = ({
  searchTerm,
  ageRange,
  maxDistance,
  sortBy,
}: NeighborhoodSearchParams) => {
  const query: any = {};

  if (searchTerm)
    query.neighborhood = {
      [Op.like]: `%${searchTerm}%`,
    };

  if (ageRange)
    query.averageAge = {
      [Op.between]: ageRange,
    };

  if (maxDistance)
    query.distanceFromCityCenter = {
      [Op.lte]: maxDistance,
    };

  const options: any = { raw: true };

  if (sortBy) options.order = [sortBy];

  return { where: query, ...options };
};

class NeighborhoodService {
  async getNeighborhoods(
    params: NeighborhoodSearchParams
  ): Promise<Neighborhood[]> {
    return await db.neighborhood.findAll(buildNeighborhoodsQuery(params));
  }
}

const neighborhoodService = new NeighborhoodService();

export default neighborhoodService;
