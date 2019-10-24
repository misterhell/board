import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Column from './Column';


const columns = [
    { id: 1, name: 'column 1' },
    { id: 2, name: 'column 2' },
]

class Board extends Component {

    id = this.props.match.params.id

    name = 'board'

    render() {

        return (
            <div>
                <div> board ({this.id}) name: <strong>{this.name}</strong> </div>

                {columns.map(col => <Column key={col.id} name={col.name}/>)}
            </div>
        );
    }
}


export default Board