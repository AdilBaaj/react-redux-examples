import React from 'react';

interface Props {
    userName?: string;
    updateUsername: (username: string) => void;
}

export default class ClassComponent extends React.Component<Props> {

    handleClick = () => this.props.updateUsername('new user name')

    render() {
        return (
            <div>
                <div> I am a class component, my name is {this.props.userName} </div>
                <button onClick={this.handleClick}> Update username </button>
            </div>
        )
    }
}
