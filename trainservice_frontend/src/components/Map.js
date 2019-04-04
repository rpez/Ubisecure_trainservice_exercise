import React from 'react'
import GoogleMapReact from 'google-map-react'
import TrainIndicator from './TrainIndicator'

const AnyReactComponent = ({ text }) => <TrainIndicator>{text}</TrainIndicator>;

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 63.9241,
                lng: 25.7482
            },
            zoom: 5.5,
            trains: []
        }

        this.state.trains = props.trains
    }

    componentWillReceiveProps({ trains }) {
        this.setState({ trains })
    }

    render() {
        return (
            <div style={{ height: '75vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBDiKjP8M5vPDszNlYDYjDCPOXLMyR_9Pk' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {this.state.trains.map(train =>
                        <AnyReactComponent
                            key={train._id}
                            lat={train.coordinates.lat}
                            lng={train.coordinates.lon}
                            text={train.name}
                        />
                    )}

                </GoogleMapReact>
            </div>
        )
    }
}

export default Map