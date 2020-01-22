import React from 'react';
import './button.scss';

class Button extends React.Component{
    render() {
        return (
            <>
                <td className={this.props.className}><i className={this.props.iClass}></i></td>
            </>
        )
    }

}
export default Button;