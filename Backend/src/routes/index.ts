import express from "express";
import neighborhoodsRouter from "./neighborhoods.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/neighborhoods",
    route: neighborhoodsRouter,
  },
];
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
