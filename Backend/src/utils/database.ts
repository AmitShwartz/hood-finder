import { NEIGHBORHOOD_DATA } from "../config/db/neighborhoods_data";

const db = require("../models");

export const initDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.neighborhood.bulkCreate(NEIGHBORHOOD_DATA);
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
};

export default db;
