import React, { Component } from 'react';
import Card from 'components/Cards/Card';


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
                (card, i)=>
                  <li key={i}>
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
