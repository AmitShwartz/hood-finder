import { z } from "zod";

export const GetNeighborhoodsBodySchema = z.object({
  searchTerm: z.string().optional(),
  ageRange: z.tuple([z.number(), z.number()]).optional(),
  maxDistance: z.number().optional(),
  sortBy: z.tuple([z.string(), z.string()]).optional(),
});
