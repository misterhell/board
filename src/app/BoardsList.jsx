import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

const boardsList = [

    { name: 'board 1', id: 1 },
    { name: 'board 2', id: 2 },
    { name: 'board 3', id: 3 },
];

export default class BoardsList extends Component {
    render() {
        return (
            <div>
                <h2>My boards list</h2>
                <ul>
                    {
                        boardsList.map(board => <li key={board.id}>
                            <Link to={`/board/${board.id}`}>{board.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}
