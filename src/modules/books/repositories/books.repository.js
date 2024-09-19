import { db } from "../../../db/mysql.connetion.js";
import { Book } from "../models/book.model.js";

export const findAllBook = async () => {
  return await db.sequelize.query(
    `SELECT b.id , b.name, b.description, b.author, b.year, c.name as category_name, b.url_img
   FROM books b 
   JOIN categories c 
   ON b.id_category = c.id`,
    {
      type: db.sequelize.QueryTypes.SELECT,
      model: Book,
      mapToModel: true,
      raw: true,
    }
  );
};

export const findByIdBook = async (id) => {
  return await db.sequelize.query(
    `SELECT b.id , b.name, b.description, b.author, b.year, c.name as category_name, b.url_img
   FROM books b 
   JOIN categories c 
   ON b.id_category = c.id where b.id = ?`,
    {
      replacements: [id],
      type: db.sequelize.QueryTypes.SELECT,
      model: Book,
      mapToModel: true,
      raw: true,
    }
  );
};

export const findBookByCategory = async (idCategory) => {
  return await db.sequelize.query(
    `SELECT b.id , b.name, b.description, b.author, b.year, c.name as category_name, b.url_img
   FROM books b 
   JOIN categories c 
   ON b.id_category = c.id where b.id_category = ?`,
    {
      replacements: [idCategory],
      type: db.sequelize.QueryTypes.SELECT,
      model: Book,
      mapToModel: true,
      raw: true,
    }
  );
};

export const findBookSearh = async (searh) => {
  return await db.sequelize.query(`SELECT * FROM books  WHERE name LIKE ?`, {
    replacements: [searh],
    type: db.sequelize.QueryTypes.SELECT,
    model: Book,
    mapToModel: true,
    raw: true,
  });
};

export const createBook = async (book) => {
  return await db.sequelize.query(
    `INSERT INTO books (name, description, author, year, id_category, url_img) 
    VALUES (?,?,?,?,?,?)`,

    {
      replacements: [
        book.name,
        book.description,
        book.author,
        book.year,
        book.id_category,
        book.url_img,
      ],
      type: db.sequelize.QueryTypes.INSERT,
    }
  );
};

export const updateBook = async (book, id) => {
  return await db.sequelize.query(
    `UPDATE books SET name = ?, description = ?, author = ?, year = ?, id_category = ?, url_img = ? WHERE id = ?`,
    {
      replacements: [
        book.name,
        book.description,
        book.author,
        book.year,
        book.id_category,
        book.url_img,
        id,
      ],
      type: db.sequelize.QueryTypes.RAW,
    }
  );
};

export const deleteBook = async (id) => {
  return await db.sequelize.query("DELETE FROM books WHERE id = ?", {
    replacements: [id],
    type: db.sequelize.QueryTypes.RAW,
  });
};
