require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")

const port = process.env.PORT
const dbUrl = process.env.DBURL

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({extended: true}))

mongoose.connect(dbUrl, {
}, (err) => {
    if (err) return console.log(err);
    console.log("db connect successfull");
})

app.use("/api", require("./routers/authRoute"));

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})