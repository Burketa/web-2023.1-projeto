const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  race: {
    type: String,
    required: false
  },
  class: {
    type: String,
    required: false
  }
})

CharacterSchema.plugin(mongoosePaginate)

mongoose.model("Character", CharacterSchema)