const mongoose = require("mongoose")
const Creature = mongoose.model("Creature")

const errorMessage = "Algo deu errado"

const defaultCreatures = [
  {
    name: "Rato Mutante 1",
    description: "Um rato mutante fedorento",
    createdBy: "Mago Azul",
    imageUrl: "https://w7.pngwing.com/pngs/325/11/png-transparent-giant-rat-drawing-rat-mouse-mammal-animals-carnivoran.png"
  },
  {
    name: "Rato Mutante 2",
    description: "Um rato mutante ameaçador",
    createdBy: "Mago Vermelho",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNVvvmzuAsAg9sN6lRMR4A0wRLkBEhU1cbPJWY0j1v5InU84O9Z9xp1H_kTLoOh19Z98&usqp=CAU"
  },
  {
    name: "Rato Mutante 3",
    description: "Um rato mutante 3D",
    createdBy: "Mago Verde",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTT77nOPrxsqziI255q87-dGZvX1JoON016GKuosohhM3bQWds_H5jqEB3qTSMVqlR_Yc&usqp=CAU"
  },
  {
    name: "Rato Mutante 4",
    description: "Um rato mutante triste",
    createdBy: "Mago Preto",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39224191-25bd-42fa-9863-d33d472ec5f0/d2jgc3s-19dca1bc-3813-4c54-9e2e-bdf26f167ad6.jpg/v1/fill/w_496,h_350,q_70,strp/mutant_rat_by_tmoegee_d2jgc3s-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzUzIiwicGF0aCI6IlwvZlwvMzkyMjQxOTEtMjViZC00MmZhLTk4NjMtZDMzZDQ3MmVjNWYwXC9kMmpnYzNzLTE5ZGNhMWJjLTM4MTMtNGM1NC05ZTJlLWJkZjI2ZjE2N2FkNi5qcGciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ghDVxn77sAsLOAFm2AVw3mU2yb0EcVAPcmhvUlmzG0g"
  },
  {
    name: "Rato Mutante 5",
    description: "Um rato mutante chato",
    createdBy: "Mago Branco",
    imageUrl: "https://w7.pngwing.com/pngs/58/337/png-transparent-godzilla-junior-rat-television-show-wikia-rat-television-mammal-animals.png"
  }
]

module.exports = {
  async showAll(req, res) {
    try {
      await checkIfDocsAreEmpty()

      const { page = 1 } = req.query
      const creature = await Creature.paginate({}, { page, limit: 10 })

      logResponse(creature)
      return res.json(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async create(req, res) {
    try {
      const creature = await Creature.create(req.body)

      logResponse(creature)
      return res.json(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async read(req, res) {
    try {
      const creature = await Creature.findById(req.params.id)

      logResponse(creature)
      return res.json(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async update(req, res) {
    try {
      const creature = await Creature.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
      )

      logResponse(creature)
      return res.json(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async delete(req, res) {
    try {
      const creature = await Creature.findByIdAndRemove(req.params.id)

      logResponse(creature)
      return res.send(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async deleteAll(req, res) {
    try {
      const creature = await Creature.deleteMany()

      logResponse(creature)
      return res.send(creature)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  }
}

async function checkIfDocsAreEmpty() {
  const creaturesCount = await Creature.countDocuments()

  if (creaturesCount == 0)
    return await Creature.insertMany(defaultCreatures)
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : obj, null, 4)}`)
}