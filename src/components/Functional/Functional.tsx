import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootReducerI } from '../../reducers'
import {selectUsername} from "../../reducers/userFunctional";
import { updateUsername } from '../../reducers/userFunctional'

interface uiComponentsProps {
    username: string,
    handleClick: () => void
}

export const UiComponent = ({username, handleClick}: uiComponentsProps) => (
    <div>
        <div id="description"> I am a class component, my name is {username} </div>
        <button onClick={handleClick}> Update username </button>
    </div>
)

export default () => {
    const username = useSelector<rootReducerI, string>(state => selectUsername(state.userSlice));
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateUsername('new username'));
      };

    return <UiComponent username={username}  handleClick={handleClick} />
}
