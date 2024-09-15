import express from "express";
import useRouter from "./modules/books/controllers/books.controller.js";
import { db } from "./db/mysql.connetion.js";
const app = express();

// cors
const corsOption = {
  origin: "url",
};

app.use(express.json());
app.use("/api/v1/books", useRouter);

db.sequelize.sync().then(() => {
  console.log("Database running");
});

app.listen(3000, () => {
  console.log("server running port 30000");
});
