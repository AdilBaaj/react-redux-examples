import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootReducerI } from '../../reducers'
import { updateUsername } from '../../reducers/userFunctional'

export default () => {
    const {username} = useSelector<rootReducerI, {username: string}>(state => state.userSlice);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateUsername('new username'));
      };

    return (
        <div>
            <div> I am a class component, my name is {username} </div>
            <button onClick={handleClick}> Update username </button>
        </div>
    )
}
