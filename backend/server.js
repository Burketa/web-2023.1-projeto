//Dotenv
require("dotenv/config")

//Importações de Modelos
require("./src/models/Character")
require("./src/models/Item")
require("./src/models/Creature")

//App
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

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