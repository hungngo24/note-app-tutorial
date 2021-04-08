const express = require("express");
const db = require("../utils/connectDB");
const app = express();
const router = require("./routers/index");
require("dotenv").config();
const cors = require("cors");

app.use(express.json()); //req = js
app.use(cors());

db.connectDB();
router(app);

const PORT = 5000;
app.listen(
    PORT,
    console.log(`Server Started on port http://localhost:${PORT}`)
);
