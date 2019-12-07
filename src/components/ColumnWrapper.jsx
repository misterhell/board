import React, { Component } from "react";
import { COLUM_WRAPPER_CLASS_NAME } from "constants.js";

class ColumnWrapper extends Component {



  render() {
    return (
      <div
        className={COLUM_WRAPPER_CLASS_NAME}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ColumnWrapper;
