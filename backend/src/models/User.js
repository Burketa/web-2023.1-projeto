const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

UserSchema.plugin(mongoosePaginate)

mongoose.model("User", UserSchema)