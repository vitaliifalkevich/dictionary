import React from 'react';
import Input from './Input'
import './addnewrecord.scss'

class AddNewRecord extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
    }

    render() {
        return (
            <>
                <hr/>
                <h2>Add new dictionary record bellow</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input_group">
                    <Input title="Type Domain" placeholder="Original color"/>
                    <Input title="Type Range" placeholder="Converted color"/>
                        <div className="btn-groups">
                            <input type="submit" value="Submit"/>
                            <input type="reset" value="Reset"/>
                        </div>
                    </div>
                    <br/>
                </form>
            </>

        )
    }
}

export default AddNewRecord;