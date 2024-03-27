import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncWrraper";

class NeighborhoodController {
  getNeighborhoods = asyncWrapper((req: Request, res: Response) => {
    //ageRange=[minAge,maxAge]`,`maxDistance=[distance]km`, and `sortBy=[field,order]
    const { searchTerm, ageRange, maxDistance, sortBy } = req.query;
    // try {
    //   const neighborhoods = await Neighborhood.find();
    //   return res.json(neighborhoods);
    // } catch (err) {
    //   return res.status(500).json({ error: err.message });
    // }
    return res.status(200).json({ message: "Hello World!" });
  });
}

const neighborhoodController = new NeighborhoodController();

export default neighborhoodController;
