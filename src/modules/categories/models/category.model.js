import { DataTypes } from "sequelize";

export default (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
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

  return Category;
};
