const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
  async showAll(req, res) {
    const { page = 1 } = req.query
    const user = await User.paginate({}, { page, limit: 10 })

    logResponse(user)
    return res.json(user)
  },

  async create(req, res) {
    const user = await User.create(req.body)

    logResponse(user)
    return res.json(user)
  },

  async read(req, res) {
    const user = await User.findById(req.params.id)

    logResponse(user)
    return res.json(user)
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    )

    logResponse(user)
    return res.json(user)
  },

  async delete(req, res) {
    const user = await User.findByIdAndRemove(req.params.id)

    logResponse(user)
    return res.send(user)
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : (obj, null, 4))}`)
}