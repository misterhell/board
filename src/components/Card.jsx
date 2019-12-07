import React, { Component } from "react";


export default class Card extends Component {
  render() {
    const { name, body, id } = this.props;
    return (
      <div draggable="true" className="card" data-id={id} onDrag={this.props.onDrag} onDragEnd={this.props.dragEnd}>
        <div className="card-name">{name}</div>
        <div className="card-body">{body || "-"}</div>
      </div>
    );
  }
}
