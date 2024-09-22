import express from "express";
import useRouterBooks from "./modules/books/controllers/books.controller.js";
import useRouterCategories from "./modules/categories/controllers/categories.controller.js";
import { db } from "./db/mysql.connetion.js";
import cors from "cors";
const app = express();

// cors
const corsOption = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/v1/books", useRouterBooks);
app.use("/api/v1/categories", useRouterCategories);

db.sequelize.sync().then(() => {
  console.log("Database running");
});
const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log("server running port ", port);
});
