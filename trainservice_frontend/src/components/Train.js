import React from 'react'

// Component for train list elements
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
    const trainStyle = {
      paddingRight: 20
    }
    const titleStyle = {
      color: 'grey'
    }


    return (
      <tr>
        <th style={titleStyle}>Name:</th>
        <th style={trainStyle} className="train_name">{this.state.train.name}</th>
        <th style={titleStyle}>Destination:</th>
        <th style={trainStyle} className="train_destination">{this.state.train.destination}</th>
        <th style={titleStyle}>Speed:</th>
        <th style={trainStyle} className="train_speed">{this.state.train.speed}</th>
        <th style={titleStyle}>Coordinates:</th>
        <th style={trainStyle} className="train_coordinates">{this.state.train.coordinates.lat} {this.state.train.coordinates.lon}</th>
      </tr>
    )
  }
}

export default Train