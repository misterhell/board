import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from 'components/Cards/Card';


export default class Column extends Component {

  onDragStart = ev => {
    ev.dataTransfer.setData('element-id', ev.target.getAttribute('id'))

    this.props.dragging(ev)
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
                (card, i)=>
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

Column.propTypes = {
  onDrag: PropTypes.func
}
