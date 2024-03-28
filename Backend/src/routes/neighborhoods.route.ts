import { Router } from "express";
import neighborhoodController from "../controllers/neighborhoods.ctrl";

const router = Router();

/**
 * @swagger
 * /api/neighborhoods:
 *   get:
 *     tags:
 *       - Neighborhoods
 *     summary: Get neighborhoods
 *     description: Retrieve neighborhoods based on search parameters
 *     parameters:
 *       - in: query
 *         name: searchTerm
 *         schema:
 *           type: string
 *         description: Search term for neighborhoods
 *       - in: query
 *         name: ageRange
 *         schema:
 *           $ref: '#/components/schemas/NeighborhoodSearchParams'
 *         example: [20, 30]
 *         description: Age range filter
 *       - in: query
 *         name: maxDistance
 *         schema:
 *           type: number
 *         description: Maximum distance from city center
 *       - in: query
 *         name: sortBy
 *         schema:
 *           $ref: '#/components/schemas/NeighborhoodSearchParams'
 *         example: ['averageAge', 'ASC']
 *         description: Sorting criteria
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Neighborhood'
 */
router.get("/", neighborhoodController.getNeighborhoods);

/**
 * @swagger
 * /api/neighborhoods/sortOptions:
 *   get:
 *     tags:
 *       - Neighborhoods
 *     summary: Get neighborhood sort options
 *     description: Retrieve available sort options for neighborhoods
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fieldOptions:
 *                   type: array
 *                   items:
 *                     type: string
 *                 sortOptions:
 *                   type: array
 *                   items:
 *                     type: string
 *             example:
 *               fieldOptions: ["neighborhood", "city", "averageAge", "distanceFromCityCenter", "averageIncome", "publicTransportAvailability", "latitude", "longitude", "createdAt", "updatedAt"]
 *               sortOptions: ["ASC", "DESC"]
 */
router.get("/sortOptions", neighborhoodController.getNeighborhoodSortOptions);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     NeighborhoodSearchParams:
 *       type: object
 *       properties:
 *         searchTerm:
 *           type: string
 *         ageRange:
 *           type: array
 *           items:
 *             type: number
 *           minItems: 2
 *           maxItems: 2
 *         maxDistance:
 *           type: number
 *         sortBy:
 *           type: array
 *           items:
 *             type: string
 *           minItems: 2
 *           maxItems: 2
 *     Neighborhood:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         neighborhood:
 *           type: string
 *         city:
 *           type: string
 *         averageAge:
 *           type: number
 *         distanceFromCityCenter:
 *           type: number
 *         averageIncome:
 *           type: number
 *         publicTransportAvailability:
 *           $ref: '#/components/schemas/PublicTransportAvailability'
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     PublicTransportAvailability:
 *       type: string
 *       enum: [High, Medium, Low]
 */
