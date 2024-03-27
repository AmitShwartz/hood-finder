import { z } from "zod";

export const GetNeighborhoodsBodySchema = z.object({
  searchTerm: z.string().optional(),
  ageRange: z
    .tuple([
      z
        .string()
        .regex(/^\d+$/, "must be a number")
        .transform((val) => parseFloat(val)),
      z
        .string()
        .regex(/^\d+$/, "must be a number")
        .transform((val) => parseFloat(val)),
    ])
    .optional(),
  maxDistance: z
    .string()
    .regex(/^\d+$/, "must be a number")
    .transform((val) => parseFloat(val))
    .optional(),
  sortBy: z
    .tuple([
      z.enum([
        "neighborhood",
        "city",
        "averageAge",
        "distanceFromCityCenter",
        "averageIncome",
        "publicTransportAvailability",
        "latitude",
        "longitude",
        "createdAt",
        "updatedAt",
      ]),
      z.enum(["ASC", "DESC"]),
    ])
    .optional(),
});
