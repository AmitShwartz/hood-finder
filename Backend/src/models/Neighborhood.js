module.exports = (sequelize, DataTypes) => {
  const Neighborhood = sequelize.define("neighborhood", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    average_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distance_from_city_center: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    average_income: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    public_transport_availability: {
      type: DataTypes.ENUM("low", "medium", "high", "none"),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return Neighborhood;
};
