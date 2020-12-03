import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

export default {
  port: parseInt(process.env.PORT, 10),

  mySqlHost: process.env.DB_HOST,
  mySqlUser: process.env.DB_USER,
  mySqkPassword: process.env.DB_PASSWORD,
  mySqlDbName: process.env.DB_NAME,

  api: {
    prefix: "/api",
  },
};
