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
      showAll: true,
      message: null,
      error: null,
      username: '',
      password: '',
      user: null
    }
  }

  // gets the train info from the api
  updateTrains() {
    trainService.getAll().then(res => {
      this.setState({
        trains: res,
      })
    })
  }

  componentDidMount() {
    // update train list each second
    this.updateTrains()
    this.interval = setInterval(() => this.updateTrains(), 1000);

    // get token (if there is any)
    const loggedUserJSON = window.localStorage.getItem('loggedTrainappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })

      trainService.setToken(user.token)
    }
  }

  componentWillUnmount() {
    // stop trainlist updating when unmount
    clearInterval(this.interval)
  }

  // check login credentials and handle token
  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      console.log(JSON.stringify(user))
      window.localStorage.setItem('loggedTrainappUser', JSON.stringify(user))
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

  // remove token
  logout = () => {
    window.localStorage.removeItem('loggedTrainappUser')
    return (
      window.location.reload()
    )
  }

  // for notifications
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

  render() {
    const loginForm = () => (
      <div>
        <h1>Log in to train service</h1>

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
            <div>
              <h1>Train service</h1>
              <p>{this.state.user.firstname} {this.state.user.lastname} logged in</p>
              <p>{this.state.user.email}</p>
              <button onClick={() => this.logout()}>logout</button>
            </div>
            <h3>Trains</h3>
            <table>
              <tbody>
                {this.state.trains.map(train =>
                  <Train key={train._id} train={train} />
                )}
              </tbody>
            </table>
          </div>
        }

      </div >
    )
  }
}

export default App