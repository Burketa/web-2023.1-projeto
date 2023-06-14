const mongoose = require("mongoose")
const Item = mongoose.model("Item")

module.exports = {
  async showAll(req, res) {
    const { page = 1 } = req.query
    const item = await Item.paginate({}, { page, limit: 10 })

    logResponse(item)
    return res.json(item)
  },

  async create(req, res) {
    console.log("COISAS DO LOG")
    console.log(req)
    console.log(req.url)
    console.log(req.params)
    console.log(req.body)
    console.log(req.query)

    console.log("////COISAS DO LOG")
    const item = await Item.create(req.body)

    logResponse(item)
    return res.json(item)
  },

  async read(req, res) {
    const item = await Item.findById(req.params.id)

    logResponse(item)
    return res.json(item)
  },

  async update(req, res) {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    )

    logResponse(item)
    return res.json(item)
  },

  async delete(req, res) {
    const item = await Item.findByIdAndRemove(req.params.id)

    logResponse(item)
    return res.send(item)
  },

  async deleteAll(req, res) {
    const item = await Item.deleteMany()

    logResponse(item)
    return res.send(item)
  }
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : obj, null, 4)}`)
}