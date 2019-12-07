import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import AddCard from "components/AddCard";
import CardWrapper from "components/CardWrapper";
import { DRAG_COLUMN_EVENT_NAME } from "constants.js";
class Column extends Component {
  static propTypes = {
    dragging: PropTypes.func
  };


  state = {
    eventsCounter: 0
  }

  onDragStart = e => {
    const { target } = e;

    setTimeout(() => {
      target.style.display = "none";
    }, 0);

    this.props.dragStart(e, target);
  };

  onDrag = dragType => e => {
    e.stopPropagation()

    if (this.state.eventsCounter >= 6) {
      console.log(dragType);
      this.setState({ eventsCounter: 0 })
      return this.props.dragging(dragType, e);
    }

    this.setState(state => ({
      eventsCounter: state.eventsCounter + 1
    }))
  };

  onDragEnd = e => {
    const { target } = e;
    setTimeout(() => {
      target.style.display = "";
    }, 0);

    this.props.dragEnd(e);
  };

  get elId() {
    return `col-${this.props.id}`;
  }

  render() {
    const { name, cards, _id: id } = this.props.column;

    let cardsList;

    if (cards && cards.length) {
      cardsList = (
        <Fragment>
          {cards.map(card => (
            <CardWrapper key={card._id}>
              <Card
                name={card.name}
                id={card._id}
                onDrag={this.onDrag(DRAG_COLUMN_EVENT_NAME)}
                {...this.props}
              />
            </CardWrapper>
          ))}
        </Fragment>
      );
    }

    return (
      <div
        id={this.elId}
        data-id={id}
        className="board-column"
        draggable="true"
        onDragEnd={this.onDragEnd}
        onDrag={this.onDrag("column")}
        onDragStart={this.onDragStart}
      >
        <div className="col-header"> column: {name} </div>
        <div>{cardsList}</div>
        <div className="col-footer">
          <AddCard columnId={id} />
        </div>
      </div>
    );
  }
}

export default Column;
