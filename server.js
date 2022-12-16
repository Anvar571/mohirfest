require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})