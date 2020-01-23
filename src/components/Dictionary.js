import React from 'react';
import './dictionary.scss';
import DictionaryList from '../containers/DictionaryList'

function Dictionary() {
    return (
        <>
            <h2>Existed Dictionary</h2>
            <table className="dictionary">
                <thead>
                <tr>
                    <th>Domain</th>
                    <th>Range</th>
                    <th width="50">Edit</th>
                    <th width="50">Remove</th>
                </tr>
                </thead>
                <tbody>
                <DictionaryList/>
                </tbody>
            </table>
        </>
    );
}


export default Dictionary;
