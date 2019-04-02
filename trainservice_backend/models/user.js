const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  firstname: String,
  lastname: String,
  email: String
})

userSchema.statics.format = (user) => {
  return {
    _id: user._id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User