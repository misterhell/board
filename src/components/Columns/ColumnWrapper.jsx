import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ColumnWrapper extends Component {

  constructor() {
    super()


  }

  static propTypes = {
    // drop: PropTypes.func
  }



  

  render() {
    return (
      <div className="board-column-wrapper">
        {this.props.children}
      </div>
    );
  }
}




export default ColumnWrapper;
