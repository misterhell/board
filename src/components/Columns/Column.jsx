import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Card from 'components/Cards/Card';


class Column extends Component {

  static propTypes = {
    // dragging: PropTypes.func
  }

  onDragStart = e => {

    const { dataTransfer, target } = e

    dataTransfer.setData('el-id', this.elId)
    dataTransfer.setData('el-parent-id', this.elId)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  noDragEnd = e => {
    const { target } = e

    setTimeout(() => {
      target.style.display = ''
    }, 0)
  }


  get elId() {
    return `col-${this.props.id}`
  }


  render() {

    const { title, cards } = this.props



    return (
      <div id={this.elId} className="board-column" draggable="true"
        onDragEnd={this.noDragEnd}
        onDragStart={this.onDragStart}
      >
        <div> column: {title} </div>
        <div>
          cards:
          <ul>
            {
              cards.map(card =>
                <li key={card._id}>
                  <Card name={card.name} />
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}



export default Column