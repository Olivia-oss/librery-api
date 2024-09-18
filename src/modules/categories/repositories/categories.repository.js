import { db } from "../../../db/mysql.connetion.js";
import { Category } from "../models/category.model.js";

export const findAllCategories = async () => {
  return await db.sequelize.query("SELECT * FROM categories", {
    type: db.sequelize.QueryTypes.SELECT,
    model: Category,
    mapToModel: true,
    raw: true,
  });
};
