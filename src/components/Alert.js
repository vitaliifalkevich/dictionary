import React from 'react';
import "./alert.scss"

function Alert(props) {
    return (
        <>
            {props.type === 'success' ? <div className="alert success"><i className="fas fa-check-circle"></i> {props.msg}</div> : ''}
            {props.type === 'notice' ? <div className="alert notice"><i className="fas fa-flag"></i> {props.msg}</div> : ''}
            {props.type === 'warning' ? <div className="alert warning"><i className="fas fa-exclamation-triangle"></i> {props.msg}</div> : ''}
        </>
    )
}

export default Alert;