import { Request, Response } from "express";
import neighborhoodService from "../services/neighborhoods.service";
import { InternalServerError, handleZodError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/asyncWrapper";
import { GetNeighborhoodsBodySchema } from "../validators/neighborhood.schema";

class NeighborhoodController {
  getNeighborhoods = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse query parameters
      const queryBody = GetNeighborhoodsBodySchema.parse(req.query);

      const neighborhoods = await neighborhoodService.getNeighborhoods(
        queryBody
      );

      return res.status(200).json(neighborhoods);
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError(error);
    }
  });

  getNeighborhoodSortOptions = asyncWrapper(
    async (req: Request, res: Response) => {
      try {
        const sortOptions = neighborhoodService.getNeighborhoodSortOptions();

        return res.status(200).json(sortOptions);
      } catch (error) {
        throw new InternalServerError(error);
      }
    }
  );
}

const neighborhoodController = new NeighborhoodController();

export default neighborhoodController;
