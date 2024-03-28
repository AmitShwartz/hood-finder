enum PublicTransportAvailability {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  NONE = "none",
}

export type Neighborhood = {
  id: number;
  neighborhood: string;
  city: string;
  averageAge: number;
  distanceFromCityCenter: number;
  averageIncome: number;
  publicTransportAvailability: PublicTransportAvailability;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
};
