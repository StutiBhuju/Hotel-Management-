import app from "./src/app.js";
import pool from "./src/config/db.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

dotenv.config()

const PORT = process.env.PORT || 3000

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("PostgreSQL Connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

startServer();


