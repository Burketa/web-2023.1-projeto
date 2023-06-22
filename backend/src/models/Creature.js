const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CreatureSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: false
  },
  weight: {
    type: Number,
    min: [0.1, 'Peso deve ser maior que 0'],
    required: true
  }
})

CreatureSchema.plugin(mongoosePaginate)

mongoose.model("Creature", CreatureSchema)