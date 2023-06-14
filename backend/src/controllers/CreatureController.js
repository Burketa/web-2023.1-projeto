const mongoose = require("mongoose")
const Creature = mongoose.model("Creature")

module.exports = {
  async showAll(req, res) {
    const { page = 1 } = req.query
    const creature = await Creature.paginate({}, { page, limit: 10 })

    logResponse(creature)
    return res.json(creature)
  },

  async create(req, res) {
    const creature = await Creature.create(req.body)

    logResponse(creature)
    return res.json(creature)
  },

  async read(req, res) {
    const creature = await Creature.findById(req.params.id)

    logResponse(creature)
    return res.json(creature)
  },

  async update(req, res) {
    const creature = await Creature.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    )

    logResponse(creature)
    return res.json(creature)
  },

  async delete(req, res) {
    const creature = await Creature.findByIdAndRemove(req.params.id)

    logResponse(creature)
    return res.send(creature)
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : obj, null, 4)}`)
}