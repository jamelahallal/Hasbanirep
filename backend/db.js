import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQLPORT,
});

try {
  await db.query("SELECT 1");
  console.log("✅ MySQL connected!");
} catch (err) {
  console.error("❌ DB connection failed:", err);
}

export default db;
