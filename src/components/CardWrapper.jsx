import React, { Component } from "react";
import { CARD_WRAPPER_CLASS_NAME } from 'constants.js'

class CardWrapper extends Component {
  render() {
    return <div className={CARD_WRAPPER_CLASS_NAME}>{this.props.children}</div>;
  }
}

export default CardWrapper;
