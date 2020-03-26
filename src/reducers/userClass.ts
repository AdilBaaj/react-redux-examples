import {UPDATE_USERNAME, updateUsernameActionI} from '../actions/user'

export interface stateI {
  email?: string;
  username?: string;
}

const initialState: stateI = {email: 'adil.baaj@nimbleways.com', username: 'Adil'}

export default (state: stateI = initialState, action: updateUsernameActionI) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {...state, username: action.payload}
    default:
      return state
  }
}
