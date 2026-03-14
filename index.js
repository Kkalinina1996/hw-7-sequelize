import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;
app.get("/", (req, res) => {
  res.send("Hello, Sequelize with Express!");
});
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully!",
    );
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});