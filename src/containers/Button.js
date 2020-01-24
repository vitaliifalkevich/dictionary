import React from 'react';
import './button.scss';
import {connect} from 'react-redux'
import {removeRecord, editRecord} from "../actions";


class Button extends React.Component{

    switchButtonMethod = (name)=> {
        switch (name) {
            case 'remove':
                return this.removeRecordDOM();
            case 'edit':
                return this.editRecordDOM();
            case 'apply':
                return this.applyRecordDOM();
            default:
                return ''
        }

    };
    removeRecordDOM = ()=> {
        this.props.onEditClicked('');
        this.props.dispatch(removeRecord(this.props.index))
    };
    editRecordDOM = ()=> {
        this.props.onEditClicked(this.props.index);
    };
    applyRecordDOM = ()=> {
        let domainValue = document.getElementById("InputDomain-"+this.props.index);
        let rangeValue = document.getElementById("InputRange-"+this.props.index);

        this.props.dispatch(editRecord(
            this.props.index,
            domainValue.value,
            rangeValue.value));

        domainValue.value = '';
        rangeValue.value = '';
        this.props.onEditClicked('');


    };
    render() {
        return (
            <>
                <td onClick={() => this.switchButtonMethod(this.props.className)
                }
                    className={this.props.className}
                ><i className={this.props.iClass}></i></td>
            </>
        )
    }

}

export default connect()(Button);