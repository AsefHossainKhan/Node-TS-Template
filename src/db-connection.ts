import { Sequelize } from "sequelize-typescript";
import config from "./config";

const sequelize = new Sequelize({
  ...config.getDatabaseConfig(),
  dialect: "postgres",
  logging: false,
  models: [__dirname + "/models"],
});

export default sequelize;
