const mongoose = require("mongoose")
const UserController = require("./UserController")
const User = mongoose.model("User")

module.exports = {
  async login(req, res) {
    console.log("logando")
    try {
      const user = await User.findOne({ user: req.body.user })

      if (!user) return res.json("Usuário nao encontrado")
      if (req.body.pass != user.pass) return res.json("senha incorreta")

      logResponse(user)
      return res.json(user)
    } catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : (obj, null, 4))}`)
}