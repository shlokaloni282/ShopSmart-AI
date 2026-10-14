require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "ShopSmart-AI API is running!" });
});

const startServer = async () => {
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.error("Missing MONGO_URI or JWT_SECRET in .env");
    process.exit(1);
  }

  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
