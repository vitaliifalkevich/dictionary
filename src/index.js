import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import rootReducer from "./reducers";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Dictionary from "./components/Dictionary";
import AddNewRecord from "./containers/AddNewRecord";
import {dataCheck} from "./middleware"

const store = createStore(rootReducer, applyMiddleware(dataCheck));

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    addNewRecordVisible = () => {
        this.setState({visible: true});
    };

    render() {
        return (
            <div>
                <h1><i className="fas fa-book-open"></i> Dictionary Management System</h1>
                <div className="card">
                    <div className="content">
                        <Provider store={store}>
                            <Dictionary/>
                            {!this.state.visible ?  <button onClick={this.addNewRecordVisible} id="addRecord"><i className="fas fa-plus"></i> Add
                                New Record
                            </button> : ''}
                            {this.state.visible ?  <AddNewRecord/> : ''}
                        </Provider>
                        <div id="message">

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<Main/>, document.getElementById('root'));
