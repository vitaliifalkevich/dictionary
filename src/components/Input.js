import React from 'react';
import './input.scss';



class Input extends React.Component {
    inputName = this.props.id;
    render() {
        return (
            <>
                <label>
                    {this.props.title ? <div>{this.props.title}</div>: ''}
                    <input id={this.inputName} type="text" defaultValue={this.props.value}  placeholder={this.props.placeholder}/>
                </label>
            </>
        )
    }
}

export default Input;