import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 🔗 Koneksi ke Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// 🧠 Cek koneksi dan buat tabel jika belum ada
async function initDB() {
  try {
    const client = await pool.connect();
    console.log("✅ Connected to database");

    await client.query(`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    console.log("✅ Table 'signups' is ready");
    client.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}

// 📨 Endpoint untuk menerima data dari frontend
app.post("/api/signup", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  try {
    await pool.query("INSERT INTO signups (name, email) VALUES ($1, $2)", [name, email]);
    res.json({ message: "✅ Data saved successfully" });
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// 🚀 Start server
app.listen(PORT, async () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  await initDB();
});
