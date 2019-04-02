const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.send(users.map(User.format))
})

usersRouter.post('/', async (request, response) => {
  try {
    const { username, password, firstname, lastname, email } = request.body

    if ( password.length<3 ) {
      return response.status(400).json({ error: 'password too short' })
    }

    const existing = await User.findOne({username})
    if (existing) {
      return response.status(400).json({ error: 'username must be unique' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      passwordHash,
      firstname,
      lastname,
      email
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter