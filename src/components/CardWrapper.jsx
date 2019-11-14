import React, { Component } from 'react';

class CardWrapper extends Component {
  render() {
    return (
      <div className="card-wrapper"> 
          {this.props.children}
      </div>
    );
  }
}

export default CardWrapper;
