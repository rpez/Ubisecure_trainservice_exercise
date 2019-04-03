import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Train from './components/Train'
import trainService from './services/__mocks__/trains'
jest.mock('./services/__mocks__/trains')

describe('<App />', () => {
    let app

    describe('when user is not logged', () => {
        beforeEach(() => {
            app = mount(<App />)
        })

        it('only login form is rendered', () => {
            app.update()
            const trainComponents = app.find(Train)
            const loginForm = app.find('form')
            expect(trainComponents.length).toEqual(0)
            expect(loginForm.text()).toContain('username')
            expect(loginForm.text()).toContain('password')
        })
    })

    describe('when user is logged', () => {
        beforeEach(() => {
            const user = {
                username: 'test',
                token: '123123123',
                firstname: 'Teuvo',
                lastname: 'Testaaja',
                email: 'testaaja@test.fi'
            }

            localStorage.setItem('loggedTrainAppUser', JSON.stringify(user))
            app = mount(<App />)
        })

        it('all trains are rendered', () => {
            app.update()
            const trainComponents = app.find(Train)
            expect(trainComponents.length).toEqual(trainService.trains.length)
        })

        it('new train is added correctly', () => {
            app.update()
            const newTrain = {
                _id: "5",
                name: "new train",
                destination: "test",
                speed: 50,
                coordinates: { lat: 10, lon: 20 }
            }
            const trainComponents = app.find(Train)
            expect(trainComponents.length).toEqual(trainService.trains.length)
            trainService.put(newTrain)
            expect(trainComponents.length).toEqual(trainService.trains.length + 1)
        })

        it('existing train is updated correctly', () => {
            app.update()
            const updateTrain = {
                _id: "1",
                name: "Intercity 32",
                destination: "Tampere",
                speed: 120.1,
                coordinates: { lat: 10, lon: 20 }
            }
            const trainComponents = app.find(Train)
            const oldTrain = trainService.trains.find(x => x._id === this.updateTrain._id)
            expect(oldTrain).toEqual(!undefined)
            trainService.put(updateTrain)
            expect(trainComponents.length).toEqual(trainService.trains.length)
            const newTrain = trainService.trains.find(x => x._id === this.updateTrain._id)
            expect(newTrain).toEqual(!undefined)
            expect(newTrain.coordinates).toEqual(updateTrain.coordinates)
        })
    })
})