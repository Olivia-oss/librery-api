import { DataTypes } from "sequelize";

export const Book = (sequelize, Sequelize) => {
  const model = sequelize.define("book", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    url_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  model.belongsTo(sequelize.models.Category, {
    foreignKey: "id_category",
    as: "category",
  });

  return model;
};
