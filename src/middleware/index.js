import Alert from "../components/Alert"
import React from "react";
import ReactDOM from "react-dom";

const DOMAIN_EXISTED = "This Domain existed";
const RANGE_EXISTED = "This Range existed";
const COLOR_EXISTED = "This color is existed in database";
const SIMILAR_COLOR = "You can not to type one color as Domain and as Range";
const EMPTY_COLOR = "2 colors must be inputed";
const CYCLES = "Can be cycles!";


export const dataCheck = store => next => action => {
    let middleWareError = false;
    let msgError = '';
    let typeError = '';

    store.getState().map((item, idx)=> {
        if(action.type === "EDIT_RECORD" && action.id === idx) {
        }
        else {
            if(item.domain === action.domain) {
                return (
                    middleWareError = true,
                        msgError = DOMAIN_EXISTED,
                        typeError = 'notice'
                )
            }
            if(item.range === action.range) {
                return (
                    middleWareError = true,
                        msgError = RANGE_EXISTED,
                        typeError = 'notice'
                )
            }
            if(item.domain === action.range && item.range === action.domain) {
                return (
                    middleWareError = true,
                        msgError = CYCLES,
                        typeError = 'warning'
                )
            }
            if(item.domain === action.range || item.range === action.domain) {
                return (
                    middleWareError = true,
                        msgError = COLOR_EXISTED,
                        typeError = 'notice'
                )
            }
            if(action.domain === action.range && action.domain !== undefined && action.domain !== '' ) {
                return (
                    middleWareError = true,
                        msgError = SIMILAR_COLOR,
                        typeError = 'notice'
                )
            }
            if((action.domain === action.range && action.domain === '') || (action.range === '') || (action.domain === '')) {
                return (
                    middleWareError = true,
                        msgError = EMPTY_COLOR,
                        typeError = 'notice'
                )
            }
        }

    });

    if(!middleWareError) {

        let domAlert = document.getElementById('message');
        if(domAlert) {
            ReactDOM.render(<Alert type="success" msg="Success"/>, document.getElementById('message'));
        }
        return next(action)
    }

    else {
        ReactDOM.render(<Alert type={typeError} msg={msgError}/>, document.getElementById('message'));
    }

};
