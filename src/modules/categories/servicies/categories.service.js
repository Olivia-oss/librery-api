import { asyncHandle } from "../../../middlewares/asyncHandle.middleware.js";
import { findAllCategories } from "../repositories/categories.repository.js";

export const getAllCategories = asyncHandle(async (req, res, next) => {
  const data = await findAllCategories();
  res.json(data);
});
