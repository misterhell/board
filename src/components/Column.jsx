import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import AddCard from "components/AddCard";
import CardWrapper from "components/CardWrapper";
import { DRAG_COLUMN_EVENT_NAME, DRAG_CARD_EVENT_NAME } from "constants.js";
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
      target.classList.add('display-none');
    }, 0);

    this.props.dragStart(e, target);
  };

  onDrag = dragType => e => {
    e.stopPropagation()

    if (this.state.eventsCounter >= 6) {
      this.setState({ eventsCounter: 0 })
      this.props.dragging(dragType, e);
    } else {
      this.setState(state => ({
        eventsCounter: state.eventsCounter + 1
      }))
    }
  };

  onDragEnd = dragType => e => {
    const { target } = e;
    e.stopPropagation();
    setTimeout(() => {
      target.classList.remove('display-none');
    }, 0);

    this.props.dragEnd(dragType);
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
                dragging={this.props.dragging}
                onDrag={this.onDrag(DRAG_CARD_EVENT_NAME)}
                dragEnd={this.onDragEnd(DRAG_CARD_EVENT_NAME)}
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
        onDrag={this.onDrag(DRAG_COLUMN_EVENT_NAME)}
        onDragEnd={this.onDragEnd(DRAG_COLUMN_EVENT_NAME)}
        onDragStart={this.onDragStart}
      >
        <div className="col-header"> column: {name} </div>
        <div className="col-body">
          {cardsList}
        </div>
        <div className="col-footer">
          <AddCard columnId={id} />
        </div>
      </div>
    );
  }
}

export default Column;
