const trainRouter = require('express').Router()
const Train = require('../models/train')

// returns all the trains
trainRouter.get('/', async (request, response) => {
  const trains = await Train.find({})

  response.json(trains)
})

// constructs a new train or updates old one according to the PUT request
trainRouter.put('/:id/location', async (request, response) => {
  const { name, destination, speed } = request.body
  const lat = request.body.coordinates[0]
  const lon = request.body.coordinates[1]
  const coordinates = { lat, lon }
  const _id = request.params.id

  train = null
  train = await Train.findOneAndUpdate({ _id: _id }, { name, destination, speed, coordinates }, { new: true })
  if (_id !== null && train === null) {
    const newTrain = new Train({_id, name, destination, speed, coordinates })
    train = await newTrain.save()
  }
  
  response.send(train)
})

module.exports = trainRouter