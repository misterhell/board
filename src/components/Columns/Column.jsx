import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from 'components/Cards/Card';


class Column extends Component {

  static propTypes = {
    dragging: PropTypes.func
  }


  onDragStart = ev => {
    ev.dataTransfer.setData('element-id', ev.target.getAttribute('id'))

    this.props.dragging(ev, this.id)
  }

  render() {
    return (
      <div id={`column-${this.props.id}`}
        className="board-column"
        draggable
        onDragStart={this.onDragStart}>
        <div> column: {this.props.column.title} </div>
        <div>
          cards:
          <ul>
            {
              this.props.column.cards.map(
                (card, i) =>
                  <li key={i}>
                    <Card params={card} />
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