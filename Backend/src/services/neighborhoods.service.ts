import db from "../utils/database";
import { Op } from "sequelize";

type GetNeighborhoodsBody = {
  searchTerm?: string;
  ageRange?: [number, number];
  maxDistance?: number;
  sortBy?: [string, string];
};

class NeighborhoodService {
  async getNeighborhoods({
    searchTerm,
    ageRange,
    maxDistance,
    sortBy,
  }: GetNeighborhoodsBody) {
    return await db.Neighborhood.findAll({
      where: {
        neighborhood: {
          [Op.like]: `%${searchTerm}%`,
        },
        age: {
          [Op.between]: ageRange,
        },
        distance: {
          [Op.lte]: maxDistance,
        },
      },
      order: [sortBy],
    });
  }
}

const neighborhoodService = new NeighborhoodService();

export default neighborhoodService;
