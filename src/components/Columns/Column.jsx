import React, { Component } from 'react';
import Card from '../Cards/Card';


export default class Column extends Component {
  render() {
    return (
      <div className="board-column">
        <div> column: {this.props.column.title} </div>
        <div>
          cards:
          <ul>
            {
              this.props.column.cards.map(
                card =>
                  <li key={card.id}>
                    <Card params={card} />
                  </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
