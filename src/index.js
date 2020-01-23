import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import rootReducer from "./reducers";
import {addRecord} from "./actions";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Dictionary from "./components/Dictionary";
import AddNewRecord from "./containers/AddNewRecord";
import Alert from "./components/Alert"

const store = createStore(rootReducer);

console.log(store.getState());


store.dispatch(addRecord('Midnight Black', 'Black'));


/*store.dispatch(addRecord('EDIT_RECORD', {id: 2, domain: 'edit', range: 'edit2'}));*/

console.log(store.getState());


class Main extends React.Component {
    render() {
        return (
            <div>
                <h1><i className="fas fa-book-open"></i> Dictionary Management System</h1>
                <div className="card">
                    <div className="content">
                        <Provider store={store}>
                            <Dictionary/>
                            <button id="addRecord"><i className="fas fa-plus"></i> Add New Record</button>
                            <AddNewRecord/>
                            <Alert type="success"/>
                            <Alert type="notice"/>
                            <Alert type="warning"/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<Main/>, document.getElementById('root'));
