import { asyncHandle } from "../../../middlewares/asyncHandle.middleware.js";
import { findAllCategories } from "../../categories/repositories/categories.repository.js";
import {
  createBook,
  deleteBook,
  findAllBook,
  findByIdBook,
  findBookByCategory,
  updateBook,
  findBookSearh,
} from "../repositories/books.repository.js";

export const getAllBook = asyncHandle(async (req, res, next) => {
  const data = await findAllBook();
  res.json(data);
});

export const getByIdBook = asyncHandle(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = await findByIdBook(id);
  res.json(data);
});

export const getCBooksByCategory = asyncHandle(async (req, res, next) => {
  const idCategory = parseInt(req.params.idCategory);

  const data = await findBookByCategory(idCategory);
  res.json(data);
});

export const getBookSearh = asyncHandle(async (req, res, next) => {
  const searh = req.params.searh;

  const data = await findBookSearh(`%${searh}%`);
  res.json(data);
});

export const postBook = asyncHandle(async (req, res, next) => {
  const book = req.body;

  const result = await createBook(book);
  const newData = await findByIdBook(result[0]);

  res.json({ data: newData });
});

export const putBook = asyncHandle(async (req, res, next) => {
  const book = req.body;
  const id = req.params.id;

  await updateBook(book, id);
  const updateData = await findByIdBook(id);

  res.json({ data: updateData });
});

export const deleteByIdBook = async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteBook(id);

  if (result[0].affectedRows == 1) {
    res.json({ message: "Deleted book succefull" });
  } else {
    res.json({ message: "Deleted book failded" });
  }
};
