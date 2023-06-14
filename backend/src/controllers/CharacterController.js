const mongoose = require("mongoose")
const Character = mongoose.model("Character")

module.exports = {
  async showAll(req, res) {
    const { page = 1 } = req.query
    const character = await Character.paginate({}, { page, limit: 10 })

    logResponse(character)
    return res.json(character)
  },

  async create(req, res) {
    const character = await Character.create(req.body)

    logResponse(character)
    return res.json(character)
  },

  async read(req, res) {
    const character = await Character.findById(req.params.id)

    logResponse(character)
    return res.json(character)
  },

  async update(req, res) {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    )

    logResponse(character)
    return res.json(character)
  },

  async delete(req, res) {
    const character = await Character.findByIdAndRemove(req.params.id)

    logResponse(character)
    return res.send(character)
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : obj, null, 4)}`)
}