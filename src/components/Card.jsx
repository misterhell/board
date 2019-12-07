import React, { Component } from "react";

import { DRAG_CARD_EVENT_NAME } from 'constants.js'

export default class Card extends Component {
  render() {
    const { name, body } = this.props;
    return (
      <div draggable="true" className="card" onDrag={this.props.onDrag} onDragEnd={this.props.dragEnd}>
        <div className="card-name">{name}</div>
        <div className="card-body">{body || "-"}</div>
      </div>
    );
  }
}
