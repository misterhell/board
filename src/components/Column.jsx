import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import AddCard from "components/AddCard";
import CardWrapper from "components/CardWrapper";

class Column extends Component {
  static propTypes = {
    dragging: PropTypes.func
  };

  onDragStart = e => {
    const { target } = e;

    setTimeout(() => {
      target.style.display = "none";
    }, 0);

    this.props.dragStart(e, target.id);
  };

  onDrag = e => {
    this.props.dragging(e);
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
              <Card name={card.name} id={card._id} />
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
        onDrag={this.onDrag}
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
