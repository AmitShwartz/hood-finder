import { Request, Response, Router } from "express";
import { asyncWrapper } from "../utils/asyncWrraper";
import { ServiceUnavailableError } from "../utils/ApiError";

const router = Router();

const getHealthCheck = asyncWrapper((_req: Request, res: Response) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(healthCheck);
  } catch (error) {
    throw new ServiceUnavailableError();
  }
});

router.get("/", getHealthCheck);

export default router;
