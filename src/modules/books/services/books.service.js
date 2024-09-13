import { pool } from "../../../db/mysql.connetion.js";

export const getAllBook = async () => {
  try {
    console.log("enter");
    console.log(process.env.HOST);

    const result = await pool.query(
      `SELECT b.id AS book_id, b.name, b.description, b.author, b.year, c.name as category_name, b.url_img, c.name AS category_name 
   FROM books b 
   JOIN categories c 
   ON b.id_category = c.id`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
