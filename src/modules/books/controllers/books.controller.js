import { Router } from "express";
import {
  deleteByIdBook,
  getAllBook,
  getBookSearh,
  getByIdBook,
  getCBooksByCategory,
  postBook,
  putBook,
} from "../services/books.service.js";

const router = Router();

router.get("/", getAllBook);
router.get("/:id", getByIdBook);
router.get("/categories/:idCategory", getCBooksByCategory);
router.get("/searh/:searh", getBookSearh);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteByIdBook);

export default router;
