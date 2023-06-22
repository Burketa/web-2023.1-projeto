const mongoose = require("mongoose")
const Item = mongoose.model("Item")
const jwt = require("jsonwebtoken")

const errorMessage = "Algo deu errado"

const defaultItems = [
  {
    name: "Espada",
    description: "Espada legal",
    createdBy: "Du",
    imageUrl: "https://pt.seaicons.com/wp-content/uploads/2015/07/Wooden-Sword-icon.png"
  },
  {
    name: "Escudo",
    description: "Escudo legal",
    createdBy: "Dudu",
    imageUrl: "https://w7.pngwing.com/pngs/616/491/png-transparent-kite-shield-live-action-role-playing-game-weapon-historical-reenactment-red-shield-emblem-shield-roleplaying.png"
  },
  {
    name: "Armadura",
    description: "Armadura legal",
    createdBy: "Edu",
    imageUrl: "https://www.pngplay.com/wp-content/uploads/12/Armour-PNG-Free-File-Download.png"
  },
  {
    name: "Cajado",
    description: "Cajado legal",
    createdBy: "Plank",
    imageUrl: "https://gremoryrpg.weebly.com/uploads/2/5/1/1/25115387/708792596.png"
  },
  {
    name: "Cavalo",
    description: "Cavalo legal",
    createdBy: "Rolf",
    imageUrl: "https://i.pinimg.com/originals/89/b7/98/89b798b1e6a99d0e31eb78e0e69f04af.png"
  }
]

module.exports = {
  async showAll(req, res) {
    await checkIfDocsAreEmpty()

    const { page = 1 } = req.query
    const item = await Item.paginate({}, { page, limit: 10 })

    logResponse(item)
    return res.json(item)
  },

  async create(req, res) {
    try {
      const item = await Item.create(req.body)

      logResponse(item)
      return res.json(item)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async read(req, res) {
    try {
      const item = await Item.findById(req.params.id)

      logResponse(item)
      return res.json(item)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async update(req, res) {
    try {
      const item = await Item.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
      )

      logResponse(item)
      return res.json(item)
    } catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async delete(req, res) {
    try {
      const item = await Item.findByIdAndRemove(req.params.id)

      logResponse(item)
      return res.send(item)
    } catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async deleteAll(req, res) {
    try {
      const item = await Item.deleteMany()

      logResponse(item)
      return res.send(item)
    } catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  }
}

async function checkIfDocsAreEmpty() {
  const itemsCount = await Item.countDocuments()

  if (itemsCount == 0)
    return await Item.insertMany(defaultItems)
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : obj, null, 4)}`)
}