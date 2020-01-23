import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Button from "./Button";
import Input from "../components/Input"

class DictionaryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {idx: ''};
    }

    getIDXforEditing = (idx) => {
        this.setState({idx: idx});
    };

    showList() {
        console.log(this.state.idx);

        if (this.props.records.length > 0) {
            return this.props.records.map((record, idx) => {
                return (
                    <tr key={idx}>
                        <td id={"domain-" + idx}>
                            {this.state.idx === idx ? <Input id={"InputDomain-" + idx} value={record.domain}/>  : record.domain}
                        </td>
                        <td id={"range-" + idx}>
                            {this.state.idx === idx ? <Input id={"InputRange-" + idx} value={record.range}/>  : record.range}
                        </td>
                        {this.state.idx === idx ?
                            <Button onEditClicked={this.getIDXforEditing} index={idx} className="apply"
                                    iClass="fas fa-check"/>
                                    :
                            <Button onEditClicked={this.getIDXforEditing} index={idx} className="edit"
                                    iClass="far fa-edit"/>}
                        <Button onEditClicked={this.getIDXforEditing} index={idx} className="remove" iClass="fas fa-times"/>
                    </tr>
                );
            });
        } else {
            return (
                <tr>
                    <h4>Empty here. You can add new dictionaries</h4>
                </tr>
            )
        }
    }

    render() {
        return (
            <>
                {this.showList()}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        records: state
    }
}

export default connect(mapStateToProps)(DictionaryList);