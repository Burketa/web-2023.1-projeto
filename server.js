//Dotenv
require("dotenv/config")

//Content
const content = require("./content.js")

//App
const express = require("express")
const nodemailer = require('nodemailer')
const app = express()
const path = require('path')
app.use(express.json())
app.use("/public", express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Mustache
const mustacheExpress = require("mustache-express")
app.engine("mustache", mustacheExpress())
app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "mustache")

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
})

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

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
    const { name, subject, email, message } = req.body
    const mailOptions = {
        from: process.env.email,
        to: email,
        subject: subject,
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        const renderContent = { ...content, renderEmail: true }
        if (error) {
            console.log(error)
            renderContent.renderEmailFailure = true
            return res.status(500).render(content.app.defaultPage, renderContent)
        } else {
            console.log('E-mail enviado: ' + info.response);
            renderContent.renderEmailSuccess = true
            return res.render(content.app.defaultPage, renderContent)
        }
    })
})

//Erro 404 - Página não encontrada
app.use(function (req, res, next) {
    const renderContent = { ...content, render404: true }
    return res.render(content.app.defaultPage, renderContent)
})

//Bora servir :P
app.listen(process.env.PORT || 3000)
console.log(`\nPorta: ${process.env.PORT || 3000}\n`)
