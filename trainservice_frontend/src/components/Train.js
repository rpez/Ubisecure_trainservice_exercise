import React from 'react'

class Train extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.train = props.train
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const trainStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    return (
      <div style={trainStyle}>
          {this.train._id}
      </div>
    )
  }
}

export default Train