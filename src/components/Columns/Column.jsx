import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Card from 'components/Cards/Card';


class Column extends Component {

  static propTypes = {
    dragging: PropTypes.func
  }

  onDragStart = e => {
    const { target } = e

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)

    this.props.dragStart(e, target.id)
  }

  onDrag = e => {
    this.props.dragging(e)
  }

  onDragEnd = e => {
    const { target } = e
    setTimeout(() => {
      target.style.display = ''
    }, 0)

    this.props.dragEnd(e)
  }


  get elId() {
    return `col-${this.props.id}`
  }


  render() {

    const { title, cards, id } = this.props



    return (
      
      <div id={this.elId} data-id={id} className="board-column" draggable="true"
        onDragEnd={this.onDragEnd}
        onDrag={this.onDrag}
        onDragStart={this.onDragStart}
      >
        <div> column: {title} </div>
        <div>
          cards:
          <ul>
            {
              cards.map(card =>
                <li key={card._id}>
                  <Card name={card.name} id={card._id} />
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}



export default Column