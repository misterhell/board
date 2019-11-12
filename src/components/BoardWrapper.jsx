import React, { Component } from 'react';

export default class BoardWrapper extends Component {



    render() {
        return (
            <div className="board-wrapper">
                {this.props.children}
            </div>
        );
    }
}