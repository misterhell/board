import React, { Component } from 'react';

class BoardContent extends Component {
  render() {
    return (
      <div> {this.props.children} </div>
    );
  }
}

export default BoardContent;
