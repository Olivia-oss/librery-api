import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    connectTimeout: 60000,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connetion has been established successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
