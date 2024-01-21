const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
//middlewares
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running on PORT ${PORT}`);
});
