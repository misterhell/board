import React, { Component } from 'react';
import Card from './Card';

const cards = [
  {
    id: 1,
    title: 'Card 1 title',
    description: 'This is card 1 description'
  },
  {
    id: 2,
    title: 'Card 2 title',
    description: 'This is card 2 description'
  }
];
export default class Column extends Component {
  render() {
    return (
      <div>
        <div> column: {this.props.name} </div>
        <div>
          cards:
          <ul>
            {
              cards.map(
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
