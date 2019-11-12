import React, { Component } from 'react';

export default class Card extends Component {


  onDrag = e => {
    console.log('card drag')
    e.stopPropagation()
  }

  render() {
    const { name } = this.props
    return (
      <span onDragStart={this.onDrag}> {name} </span>
    );
  }
}
