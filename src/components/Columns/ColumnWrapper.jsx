import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ColumnWrapper extends Component {

  constructor() {
    super()

    this.colWrapperRef = React.createRef()

    this.dragCounter = 0
  }

  static propTypes = {
    drop: PropTypes.func
  }

  

  getRefEl = () => this.colWrapperRef.current

  onDragLeave = ev => {
    this.dragCounter--;
    const ref = this.getRefEl();


    if (!this.dragCounter) {
      ref.removeAttribute('drop-active')
      ref.removeAttribute('empty-col')
    }
  }

  onDragEnter = ev => {
    this.dragCounter++;
    const ref = this.getRefEl();


    if (this.dragCounter) {
      ref.setAttribute('drop-active', true)
      ref.setAttribute('empty-col', true)
    }
  }

  onDragOver = ev => {
    console.log(ev)
    ev.preventDefault();
  }

  onDrop = ev => {
    this.props.drop(ev)

    this.switchToDefaultState()
  }

  switchToDefaultState () {
    const ref = this.getRefEl();
    ref.removeAttribute('drop-active')
    ref.removeAttribute('empty-col')
    this.dragCounter = 0
  }

  render() {
    return (
      <div className="board-column-wrapper"
        id={`column-wrapper-${this.props.id}`}
        ref={this.colWrapperRef} 
        onDragLeave={this.onDragLeave}
        onDragEnter={this.onDragEnter} 
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
}




export default ColumnWrapper;
