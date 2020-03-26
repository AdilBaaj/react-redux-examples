import { Dispatch } from 'redux'
import {connect} from 'react-redux'
import Class from './Class'
import {rootReducerI} from '../../reducers'
import {UPDATE_USERNAME} from '../../actions/user'


const mapStateToProps = (state: rootReducerI) => {
    return {
      userName: state.userClass.username
    }
  }

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateUsername: (username :string) => dispatch({type: UPDATE_USERNAME, payload: username})
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Class)
