import { Sequelize, DataTypes } from "sequelize";
import config from "../config";

export default async () => {
  const sequelize = new Sequelize(
    config.mySqlDbName,
    config.mySqlUser,
    config.mySqkPassword,
    {
      host: config.mySqlHost,
      dialect: "mysql",

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );

  const models = [
    {
      name: "settingsModel",
      path: "../models/settings",
    },
    //.....
  ];

  //Initialize tables
  models.forEach((model) => {
    let modelSchema = require(model.path).default(sequelize, DataTypes);
    //create or update tables in case of model changes
    modelSchema.sync();
    module.exports[model.name] = modelSchema;
  });

  return sequelize;
};
