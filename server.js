require("dotenv").config()
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const PORT = process.env.PORT;
const dbUrl = process.env.DBURL

// middleware
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

// auth logic
app.use("/api", require("./routers/authRoute"));


mongoose.connect(dbUrl, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) throw err;
    console.log("connect to db");
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT} port`);
})