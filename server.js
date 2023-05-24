//Dotenv
require("dotenv/config")

//Content
const content = require("./content.js")

//Express
const express = require("express")

//App
const app = express()
app.use(express.json())

//Rotas
app.get("/", (req, res) => {
    return res.send(content.home.title)
})

//Bora servir :P
app.listen(process.env.PORT || 3000)
console.log(`\nPorta: ${process.env.PORT || 3000}\n`)
