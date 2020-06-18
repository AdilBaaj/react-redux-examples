import reducer, {updateUsername, initialState as defaultState, selectUsername} from './userFunctional';

describe('userFunctional Reducer', () => {

    it('Should return initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(defaultState)
    })

    it('Should update state', () => {
        const action = updateUsername('newUsername')
        const nextState = reducer(defaultState, action)
        expect(selectUsername(nextState)).toEqual('newUsername')
    })
})