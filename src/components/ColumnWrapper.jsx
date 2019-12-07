import React, { Component } from "react";
import PropTypes from "prop-types";
import { COLUM_WRAPPER_CLASS_NAME } from "constants.js";

class ColumnWrapper extends Component {

  onDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    return (
      <div
        className={COLUM_WRAPPER_CLASS_NAME}
        onDragEnter={this.onDragEnter}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ColumnWrapper;
