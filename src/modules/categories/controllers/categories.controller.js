import { Router } from "express";
import { getAllCategories } from "../servicies/categories.service.js";

const router = Router();

router.get("", getAllCategories);

export default router;
