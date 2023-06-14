const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CreatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  life: {
    type: String,
    required: false
  },
  attack: {
    type: String,
    required: false
  }
})

CreatureSchema.plugin(mongoosePaginate)

mongoose.model("Creature", CreatureSchema)