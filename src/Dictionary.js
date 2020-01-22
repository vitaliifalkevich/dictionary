import React from 'react';
import './dictionary.scss';
import Button from './Button';

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
                <tr>
                    <td>Stonegrey</td>
                    <td>Dark Grey</td>
                    <Button className="edit" iClass="far fa-edit"/>
                    <Button className="remove" iClass="fas fa-times"/>
                </tr>
                <tr>
                    <td>Midnight Black</td>
                    <td>Black</td>
                    <Button className="edit" iClass="far fa-edit"/>
                    <Button className="remove" iClass="fas fa-times"/>
                </tr>
                <tr>
                    <td>Mystic Silver</td>
                    <td>Silver</td>
                    <Button className="edit" iClass="far fa-edit"/>
                    <Button className="remove" iClass="fas fa-times"/>
                </tr>
                </tbody>
            </table>
        </>
    );
}


export default Dictionary;
