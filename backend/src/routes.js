//Dotenv
require("dotenv/config")

//Importações
const express = require("express")
const jwt = require("jsonwebtoken")
const middlwares = require("./middlewares")
const routes = express.Router()
const UserController = require("./controllers/UserController")
const ItemController = require("./controllers/ItemController")
const CreatureController = require("./controllers/CreatureController")

//Middleware para logar os requests
routes.use(middlwares.logRequest)

//Rotas
//Login
routes.post("/login", (req, res) => {
    let response = ""
    const isLoginValid = req.body.user == "teste" && req.body.pass == "teste"

    if (isLoginValid) {
        const token = jwt.sign({ id: req.body.user }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1 min" })
        console.log("token -> ", token)
        response = { token: token }
    }

    return res.json(response)
})

//CRUDS
routes.get("/users", UserController.showAll)
routes.post("/user", UserController.create)
routes.get("/user/:id", UserController.read)
routes.put("/user/:id", UserController.update)
routes.delete("/user/:id", UserController.delete)

routes.get("/items", ItemController.showAll)
routes.post("/item", ItemController.create)
routes.get("/item/:id", ItemController.read)
routes.put("/item/:id", ItemController.update)
routes.delete("/item/:id", ItemController.delete)
routes.delete("/items", ItemController.deleteAll)

routes.get("/creatures", CreatureController.showAll)
routes.post("/creature", CreatureController.create)
routes.get("/creature/:id", CreatureController.read)
routes.put("/creature/:id", CreatureController.update)
routes.delete("/creature/:id", CreatureController.delete)
routes.delete("/creatures", CreatureController.deleteAll)

//Exportando as rotas para serem usadas no server.js
module.exports = routes