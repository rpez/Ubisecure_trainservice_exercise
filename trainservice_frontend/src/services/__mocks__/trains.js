let trains = [
    {
        coordinates: {
            lat: 50,
            lon: 35
        },
        _id: "123",
        name: "Intercity 3",
        destination: "Tampere",
        speed: 65.3,
        __v: 0
    },
    {
        coordinates: {
            lat: 60.5039,
            lon: 25.1335
        },
        _id: "1213",
        name: "Intercity 2",
        destination: "Oulu",
        speed: 50.2,
        __v: 0
    },
    {
        coordinates: {
            lat: 60.3453,
            lon: 25.1234
        },
        _id: "121753",
        name: "Intercity 1",
        destination: "Helsinki",
        speed: 10.0,
        __v: 0
    },
    {
        coordinates: {
            lat: 12.2,
            lon: 43.5
        },
        _id: "1",
        name: "Intercity 32",
        destination: "Tampere",
        speed: 120.1,
        __v: 0
    }
]

const getAll = () => {
    return Promise.resolve(trains)
}

const put = (newTrain) => {
    const train = {
        _id: newTrain._id,
        name: newTrain.name,
        destination: newTrain.destination,
        speed: newTrain.speed,
        coordinates: { lat: newTrain.coordinates[0], lon: newTrain.coordinates[1] }
    }

    const existing = trains.find(x => x._id === train._id)
    if (existing !== undefined) {
        const newList = trains.filter(x => x._id !== train._id)
        trains = newList.concat(train)
    }
    else {
        trains = trains.concat(train)
    }
    
    return Promise.resolve(train)
}

export default { getAll, trains, put }