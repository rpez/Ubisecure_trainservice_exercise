import React from 'react'
import Train from './components/Train'
import trainService from './services/trains'
import loginService from './services/login'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trains: [],
      trainsUpdated: false,
      showAll: true,
      message: null,
      error: null,
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    trainService.getAll().then(res => {
      this.setState({
        trains: res,
        trainsUpdated: true
      })
    })

    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      trainService.setToken(user.token)
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      trainService.setToken(user.token)
      this.setState({ username: '', password: '', user })
      this.notify('login successful', false)
    } catch (exception) {
      this.notify('wrong username or password', true)
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  notify = (message, isError) => {
    this.setState({
      error: isError,
      message: message
    })
    setTimeout(() => {
      this.setState({ message: null })
    }, 2000)
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  updateTrains = () => {
    if (this.state.trainsUpdated === false) {
      trainService.getAll().then(res => {
        this.setState({
          trains: res,
          trainsUpdated: true
        })
      })
      this.setState({
        trainsUpdated: true
      })
      setTimeout(() => {
        this.setState({ trainsUpdated: false })
      }, 5000)
    }

    return (
      <div>
        {this.state.trains.map(train =>
          <Train key={train._id} train={train} />
        )}
      </div>
    )
  }

  render() {
    const loginForm = () => (
      <div>
        <h1>Log in to application</h1>

        <form onSubmit={this.login}>
          <div>
            username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <div>
            password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )

    return (
      <div>
        <Notification message={this.state.message} isError={this.state.error} />

        {this.state.user === null ?
          loginForm() :
          <div>
            {this.updateTrains()}
          </div>
        }

      </div >
    )
  }
}

export default App