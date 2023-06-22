const mongoose = require("mongoose")
const User = mongoose.model("User")

const defaultUsers = [
  {
    user: "user1",
    pass: "user1",
    name: "User 1",
  },
  {
    user: "user2",
    pass: "user2",
    name: "User 2",
  },
  {
    user: "user3",
    pass: "user3",
    name: "User 3",
  },
  {
    user: "user4",
    pass: "user4",
    name: "User 4",
  },
  {
    user: "user5",
    pass: "User5",
    name: "User 5",
  },
]

module.exports = {
  async showAll(req, res) {
    try {
      await checkIfDocsAreEmpty()

      const user = await User.find()

      logResponse(user)
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async create(req, res) {
    try {
      const user = await User.create(req.body)

      logResponse(user)
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async read(req, res) {
    try {
      const user = await User.findById(req.params.id)

      logResponse(user)
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
      )

      logResponse(user)
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findByIdAndRemove(req.params.id)

      logResponse(user)
      return res.send(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  },

  async deleteAll(req, res) {
    try {
      const user = await User.deleteMany()

      logResponse(user)
      return res.send(user)
    }
    catch (err) {
      return res.status(500).json({ msg: errorMessage, error: err })
    }
  }
}

async function checkIfDocsAreEmpty() {
  const usersCount = await User.countDocuments()

  if (usersCount == 0)
    return await User.insertMany(defaultUsers)
}

function logResponse(obj) {
  return console.log(`<- Response: ${JSON.stringify(obj.docs != undefined ? obj.docs : (obj, null, 4))}`)
}