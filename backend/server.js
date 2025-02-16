const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const flashcardRoutes = require("./routes/flashcardRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
connectDB();

app.use(cors()); // ✅ Allow CORS
app.use(express.json()); // ✅ Enables JSON parsing
app.use(express.urlencoded({ extended: true })); // ✅ Enables form data parsing

// ✅ Routes must come AFTER middleware
app.use("/api/users", userRoutes);
app.use("/api", flashcardRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
