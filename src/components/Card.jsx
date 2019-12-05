import React, { Component } from "react";

export default class Card extends Component {
  onDrag = e => {
    console.log("card drag");
    e.stopPropagation();
  };

  render() {
    const { name, body } = this.props;
    return (
      <div draggable="true" className="card" onDrag={this.onDrag}>
        <div className="card-name">{name}</div>
        <div className="card-body">{body || "-"}</div>
      </div>
    );
  }
}
