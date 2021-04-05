const express = require("express");
const db = require("../utils/connectDB");
const app = express();
const router = require("./routers/index");
require("dotenv").config();

app.use(express.json()); //req = js

db.connectDB();
router(app);

const PORT = 5000;
app.listen(
    PORT,
    console.log(`Server Started on port http://localhost:${PORT}`)
);
