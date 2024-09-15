import { Router } from "express";
import {
  deleteByIdBook,
  getAllBook,
  getByIdBook,
  postBook,
  putBook,
} from "../services/books.service.js";

const router = Router();

router.get("/", getAllBook);
router.get("/:id", getByIdBook);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteByIdBook);

export default router;
