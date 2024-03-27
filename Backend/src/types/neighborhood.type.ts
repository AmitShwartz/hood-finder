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
  average_income: number;
  publicTransportAvailability: PublicTransportAvailability;
  latitude: number;
  longitude: number;
};
