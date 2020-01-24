import React from 'react';
import {connect} from 'react-redux'
import Input from '../components/Input'
import './addnewrecord.scss'
import { addRecord } from "../actions";


const AddNewRecord = ({dispatch}) => {
    return (
        <div className='addNewRecordContainer'>
            <h2>Add a new dictionary record bellow</h2>
            <form onSubmit={e => {
                e.preventDefault();
                let domainValue = document.getElementById("domain");
                let rangeValue = document.getElementById("range");
                dispatch(addRecord(domainValue.value, rangeValue.value));
                domainValue.value = '';
                rangeValue.value = '';
            }}>
                <div className="input_group">
                    <Input id="domain" title="Type Domain" placeholder="Original color"/>
                    <div style={{width: '10px'}}></div>
                    <Input id="range" title="Type Range" placeholder="Converted color"/>
                    <div className="btn-groups">
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Reset"/>
                    </div>
                </div>
                <br/>
            </form>
        </div>

    )
};

export default connect()(AddNewRecord)