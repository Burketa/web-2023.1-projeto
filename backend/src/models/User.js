const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  }
})

UserSchema.plugin(mongoosePaginate)

mongoose.model("User", UserSchema)