import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Dictionary from "./Dictionary";
import AddNewRecord from "./AddNewRecord";
import Alert from "./Alert"

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1><i className="fas fa-book-open"></i> Dictionary Management System</h1>
                <div className="card">
                    <div  className="content">
                        <Dictionary/>
                        <button id="addRecord"><i className="fas fa-plus"></i> Add New Record</button>

                        <AddNewRecord/>
                        <Alert type="success"/>
                        <Alert type="notice"/>
                        <Alert type="warning"/>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<Main/>, document.getElementById('root'));
