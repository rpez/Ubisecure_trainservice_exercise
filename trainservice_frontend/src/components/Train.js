import React from 'react'

class Train extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      train: {
        _id: String,
        name: String,
        destination: String,
        speed: Number,
        coordinates: { lat: Number, lon: Number }
      }
    }
    this.state.train = props.train
  }

  componentWillReceiveProps({ train }) {
    this.setState({ train })
  }

  render() {
    // const trainStyle = {
    //   paddingTop: 10,
    //   paddingLeft: 2,
    //   border: 'solid',
    //   borderWidth: 1,
    //   marginBottom: 5
    // }

    return (
      <tr>
        <th className="train_name">{this.state.train.name}</th>
        <th className="train_destination">{this.state.train.destination}</th>
        <th className="train_speed">{this.state.train.speed}</th>
        <th className="train_coordinates">{this.state.train.coordinates.lat} {this.state.train.coordinates.lon}</th>
      </tr>
    )
  }
}

export default Train