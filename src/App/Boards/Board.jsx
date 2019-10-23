import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Board extends Component {

    id = this.props.match.params.id

    render() {

        return (
            <div> board: {this.id} </div>
        );
    }
}


export default Board