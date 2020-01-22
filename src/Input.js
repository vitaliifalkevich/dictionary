import React from 'react';
import './input.scss';


class Input extends React.Component {

    render() {
        return (
            <>
                <label>
                    <div>{this.props.title}</div>
                    <input type="text" placeholder={this.props.placeholder}/>
                </label>
            </>
        )
    }
}

export default Input;