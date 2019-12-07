import React, { Component } from "react";

import { DRAG_CARD_EVENT_NAME } from 'constants.js'

export default class Card extends Component {

  state = {
    eventsCounter: 0
  }

  onDrag = dragType => e => {
    e.stopPropagation()
    if (this.state.eventsCounter >= 6) {
      console.log(dragType)
      this.setState({ eventsCounter: 0 })
      return this.props.dragging(dragType, e);
    }

    this.setState(state => ({
      eventsCounter: state.eventsCounter + 1
    }))
  };

  render() {
    const { name, body } = this.props;
    return (
      <div draggable="true" className="card" onDrag={this.onDrag(DRAG_CARD_EVENT_NAME)}>
        <div className="card-name">{name}</div>
        <div className="card-body">{body || "-"}</div>
      </div>
    );
  }
}
