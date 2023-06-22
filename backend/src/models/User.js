const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false
  },
  pass: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  }
})

UserSchema.plugin(mongoosePaginate)

mongoose.model("User", UserSchema)