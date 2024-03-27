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
  average_age: number;
  distance_from_city_center: number;
  average_income: number;
  public_transport_availability: PublicTransportAvailability;
  latitude: number;
  longitude: number;
};
