import { DataTypes } from "sequelize";

export const Category = (sequelize, Sequelize) => {
  const model = sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return model;
};
