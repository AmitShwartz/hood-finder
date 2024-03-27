import { Router } from "express";
import neighborhoodController from "../controllers/neighborhoods.ctrl";

const router = Router();

router.get("/", neighborhoodController.getNeighborhoods);

export default router;
