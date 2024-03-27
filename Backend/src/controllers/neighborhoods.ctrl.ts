import { Request, Response } from "express";
import neighborhoodService from "../services/neighborhoods.service";
import { InternalServerError, handleZodError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/asyncWrapper";
import { GetNeighborhoodsBodySchema } from "../validators/neighborhood.schema";

class NeighborhoodController {
  getNeighborhoods = asyncWrapper(async (req: Request, res: Response) => {
    console.log("getNeighborhoods", JSON.stringify(req.query));
    //ageRange=[minAge,maxAge]`,`maxDistance=[distance]km`, and `sortBy=[field,order]
    try {
      const queryBody = GetNeighborhoodsBodySchema.parse(req.query);
      const neighborhoods = await neighborhoodService.getNeighborhoods(
        queryBody
      );

      return res.status(200).json(neighborhoods);
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError();
    }
  });
}

const neighborhoodController = new NeighborhoodController();

export default neighborhoodController;
