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
    averageAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distanceFromCityCenter: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    averageIncome: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publicTransportAvailability: {
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
