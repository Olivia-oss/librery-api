import { DataTypes } from "sequelize";

export default (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
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
    auhor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Book;
};
