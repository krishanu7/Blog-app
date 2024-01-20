const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const cors = require("cors");

//middlewares
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running on PORT ${PORT}`);
});
