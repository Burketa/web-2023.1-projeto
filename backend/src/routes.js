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
const LoginController = require("./controllers/LoginController")

//Middleware para logar os requests
routes.use(middlwares.logRequest)

//Rotas
//Login
routes.post("/login", LoginController.login)

//CRUDS
routes.get("/users", UserController.showAll)
routes.post("/user", middlwares.validateJwt, UserController.create)
routes.get("/user/:id", UserController.read)
routes.put("/user/:id", middlwares.validateJwt, UserController.update)
routes.delete("/user/:id", middlwares.validateJwt, UserController.delete)
routes.delete("/users", middlwares.validateJwt, UserController.deleteAll)

routes.get("/items", ItemController.showAll)
routes.post("/item", middlwares.validateJwt, ItemController.create)
routes.get("/item/:id", ItemController.read)
routes.put("/item/:id", middlwares.validateJwt, ItemController.update)
routes.delete("/item/:id", middlwares.validateJwt, ItemController.delete)
routes.delete("/items", middlwares.validateJwt, ItemController.deleteAll)

routes.get("/creatures", CreatureController.showAll)
routes.post("/creature", middlwares.validateJwt, CreatureController.create)
routes.get("/creature/:id", CreatureController.read)
routes.put("/creature/:id", middlwares.validateJwt, CreatureController.update)
routes.delete("/creature/:id", middlwares.validateJwt, CreatureController.delete)
routes.delete("/creatures", middlwares.validateJwt, CreatureController.deleteAll)

//Exportando as rotas para serem usadas no server.js
module.exports = routes