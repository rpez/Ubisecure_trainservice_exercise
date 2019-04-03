import React from 'react'
import { shallow } from 'enzyme'
import Train from './Train'

describe('<Train />', () => {
    let trainComponent
    const train = {
        coordinates: {
            lat: 12.2,
            lon: 43.5
        },
        _id: "1",
        name: "Intercity 32",
        destination: "Tampere",
        speed: 120.1,
    }

    beforeEach(() => {
        trainComponent = shallow(
            <table>
                <tbody>
                    <Train train={train}></Train>
                </tbody>
            </table>
        )
    })

    it('displays train data', () => {
        const nameDiv = trainComponent.find('.title_author')
        const destinationDiv = trainComponent.find('.train_destination')
        const speedDiv = trainComponent.find('.train_speed')
        const coordinatesDiv = trainComponent.find('.train_coordinates')

        expect(nameDiv.text()).toContain(train.name)
        expect(destinationDiv.text()).toContain(train.destination)
        expect(speedDiv.text()).toContain(train.speed)
        expect(coordinatesDiv.text()).toContain(train.coordinates)
    })
})