import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Train from './components/Train'
import blogService from './services/__mocks__/trains'
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
            expect(trainComponents.length).toEqual(blogService.blogs.length)
        })
    })
})