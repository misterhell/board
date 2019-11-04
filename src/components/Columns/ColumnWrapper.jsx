import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ColumnWrapper extends Component {

  static propTypes = {
    // drop: PropTypes.func
  }

  state = {
    dragEnter: 0
  }

  onDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    console.log('enter')
    console.log(e.dataTransfer.getData('el-id'))
    this.setState(({ dragEnter: old }) => ({
      dragEnter: ++old
    }));
  }

  onDragLeave = e => {
    console.log('leave')
    console.log(e.dataTransfer.getData('el-id'))

    this.setState(({ dragEnter: old }) => ({
      dragEnter: --old
    }))
  }

  onDragOver = e => {
    // prevent event to allow drop
    console.log('over')
    console.log(e.dataTransfer.getData('el-id'))

    e.preventDefault()
  }

  onDrop = e => {
    console.log('drop')
    console.log(e.dataTransfer.getData('el-id'));

    this.setState({
      dragEnter: 0
    })
  }




  render() {
    return (
      <div className={`board-column-wrapper ${this.state.dragEnter && "active"}`}
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
