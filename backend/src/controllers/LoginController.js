const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
  async login(req, res) {
    console.log("logando")
    const user = await User.findOne({ user: req.body.user })
    if (!user) return res.json("Usuário nao encontrado")

    logResponse(user)
    return res.json(user)
  },

  async register(req, res) {
    console.log("registando")
    const user = await User.find({ user: req.params.user })
    console.log(user)

    if (req.params.pass == user.pass) console.log("deu bom")
    else console.log("deu ruim")

    logResponse(user)
    return res.json(user)
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : (obj, null, 4))}`)
}