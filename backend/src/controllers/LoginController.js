const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")

module.exports = {
  async login(req, res) {

    console.log("logando")
    try {
      const user = await User.findOne({ user: req.body.user })

      if (!user) return res.json("Usuário nao encontrado")
      if (req.body.pass != user.pass) return res.json("senha incorreta")

      logResponse(user)
      const token = jwt.sign({ id: user }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1 day" })
      console.log("token -> ", token)
      return res.json({ token: token })
    } catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : (obj, null, 4))}`)
}