import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userClass, {stateI} from './userClass'
import userSlice, {stateI as stateFunctionalI } from './userFunctional'

export interface rootReducerI {
  userClass: stateI;
  userSlice: stateFunctionalI;
  router: any;
}

const rootReducer = (history: any) => combineReducers({
  userClass,
  userSlice,
  router: connectRouter(history),
})

export default rootReducer
