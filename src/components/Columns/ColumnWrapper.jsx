import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { COLUM_WRAPPER_CLASS_NAME } from 'constants/columns'

class ColumnWrapper extends Component {

  static propTypes = {
    dropped: PropTypes.func
  }

  state = {
    dragEnter: 0
  }

  onDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    
  }

  onDragLeave = e => {

  }

  onDragOver = e => {
    // prevent event to allow drop
    // e.preventDefault()

  }

  onDrop = e => {

    this.props.dropped(e)
  }




  render() {
    return (
      <div className={COLUM_WRAPPER_CLASS_NAME}
        onDragOver={this.onDragOver}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
      >
        {this.props.children}
      </div>
    );
  }
}




export default ColumnWrapper;
