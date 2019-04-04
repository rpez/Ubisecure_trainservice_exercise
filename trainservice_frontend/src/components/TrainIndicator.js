import React from 'react'

// Markers on the map indicating train positions
class TrainIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.paint = this.paint.bind(this);
    }

    componentDidUpdate() {
        this.paint();
    }

    paint() {
        const { width, height } = this.props;
        const context = this.refs.canvas.getContext("2d");
        context.clearRect(0, 0, width, height);
        context.save();
        context.fillStyle = "#F00";
        context.fillRect(0, 0, 10, 10);
        context.restore();
    }

    render() {
        const { width, height } = this.props;
        return (
            <canvas
                ref="canvas"
                width={width}
                height={height}
            />
        );
    }
}

export default TrainIndicator