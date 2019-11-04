import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Card from 'components/Cards/Card';


class Column extends Component {

  static propTypes = {
    // dragging: PropTypes.func
  }

  onDragStart = e => {
    const { _id } = this.props
    e.dataTransfer.setData('el-id', _id)
  }


  render() {

    const { title, id, cards } = this.props

    return (
      <div id={`col-${id}`} draggable="true" onDragStart={this.onDragStart}>
        <div> column: {title} </div>
        <div>
          cards:
          <ul>
            {
              cards.map(card =>
                <li key={card._id}>
                  <Card name={card.name} />
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}



export default Column