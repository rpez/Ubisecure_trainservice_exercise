const blogs = [
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
    return Promise.resolve(blogs)
}

const put = () => {

}

export default { getAll, blogs, put }