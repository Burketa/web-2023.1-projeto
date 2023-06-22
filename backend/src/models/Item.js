const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const ItemSchema = new mongoose.Schema({
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
  }
})

ItemSchema.plugin(mongoosePaginate)

mongoose.model("Item", ItemSchema)