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
    const renderContent = { ...content, renderHome: true }
    return res.render(content.app.defaultPage, renderContent)
})
app.get(content.details.url, (req, res) => {
    const renderContent = { ...content, renderDetails: true }
    return res.render(content.app.defaultPage, renderContent)
})
app.get(content.tools.url, (req, res) => {
    const renderContent = { ...content, renderTools: true }
    return res.render(content.app.defaultPage, renderContent)
})
app.get(content.developer.url, (req, res) => {
    const renderContent = { ...content, renderDeveloper: true }
    return res.render(content.app.defaultPage, renderContent)
})
app.get(content.contact.url, (req, res) => {
    const renderContent = { ...content, renderContact: true }
    return res.render(content.app.defaultPage, renderContent)
})

//Erro 404 - Página não encontrada
app.use(function (req, res, next) {
    const renderContent = { ...content, render404: true }
    return res.render(content.app.defaultPage, renderContent)
});

//Bora servir :P
app.listen(process.env.PORT || 3000)
console.log(`\nPorta: ${process.env.PORT || 3000}\n`)
