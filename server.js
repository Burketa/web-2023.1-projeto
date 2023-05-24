//Dotenv
require("dotenv/config")

//Content
const content = require("./content.js")

//App
const express = require("express")
const app = express()
const path = require('path')
app.use(express.json())
app.use("/public", express.static('public'))

//Mustache
const mustacheExpress = require("mustache-express")
app.engine("mustache", mustacheExpress())
app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "mustache")

//Rotas
app.get(content.home.url, (req, res) => {
    return res.render(content.home.page, content)
})
app.get(content.details.url, (req, res) => {
    return res.render(content.details.page, content)
})
app.get(content.tools.url, (req, res) => {
    return res.render(content.tools.page, content)
})
app.get(content.developer.url, (req, res) => {
    return res.render(content.developer.page, content)
})
app.get(content.contact.url, (req, res) => {
    return res.render(content.contact.page, content)
})

//Erro 404 - Página não encontrada
app.use(function (req, res, next) {
    res.status(404).render("404.mustache", content)
});

//Testes
app.get("/test", (req, res) => {
    return res.render("test.mustache", content)
})

//Bora servir :P
app.listen(process.env.PORT || 3000)
console.log(`\nPorta: ${process.env.PORT || 3000}\n`)
