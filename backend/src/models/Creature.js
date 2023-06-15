const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CreatureSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  createdBy: {
    type: String,
    required: false
  }
})

CreatureSchema.plugin(mongoosePaginate)

mongoose.model("Creature", CreatureSchema)