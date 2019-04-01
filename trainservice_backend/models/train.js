const mongoose = require('mongoose')

const Train = mongoose.model('Train', {
  _id: String,
  name: String,
  destination: String,
  speed: Number,
  coordinates: { lat: Number, lon: Number }
})

module.exports = Train