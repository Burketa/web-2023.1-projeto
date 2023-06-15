//Dotenv
require("dotenv/config")

//Importações de Modelos
require("./src/models/User")
require("./src/models/Item")
require("./src/models/Creature")

//App
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const app = express()

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//BD
const mongoose = require("mongoose")
const database = "projetoweb"
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tuke9wk.mongodb.net/${database}?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Router
app.use("/api", require("./src/routes"))

//Bora servir :P
app.listen(3001, () => {
    console.log("escutando na porta 3001\n")
})