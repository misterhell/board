import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "store/boards/actions";

class BoardCreate extends Component {
  state = {
    clickedNew: false
  };

  setDefaultSate = () =>
    this.setState({
      clickedNew: false,
      name: ""
    });

  componentDidMount() {
    this.setDefaultSate();
  }

  handleAddNewClick = () => {
    this.setState(() => ({
      clickedNew: true
    }));
  };

  onInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  onInputBlur = () => {
    if (this.state.name === "") this.setDefaultSate();
  };

  onAddingHide = () => this.setDefaultSate();

  addNewBoard = () => {
    this.props.addBoard({ name: this.state.name }).then(() => {
      this.setDefaultSate();
    });
  };

  render() {
    return (
      <div style={styles.block}>
        {this.state.clickedNew ? (
          <div>
            <input
              className="add-board-input"
              placeholder="name"
              type="text"
              autoFocus
              onBlur={this.onInputBlur}
              value={this.state.name}
              onChange={this.onInput}
            />

            <button className="btn btn-primary" onClick={this.addNewBoard}>
              Create
            </button>
            <button className="btn" onClick={this.onAddingHide}>
              x
            </button>
          </div>
        ) : (
          <div style={styles.addNewBlock} onClick={this.handleAddNewClick}>
            <div style={styles.plus}>+</div>
            <div>add new board</div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { addBoard })(BoardCreate);

const styles = {
  block: {
    display: "flex",
    flex: "1",
    cursor: "pointer"
  },
  addNewBlock: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    textAlign: "center",
    justifyContent: "center",
    color: "#333"
  },
  plus: {
    fontSize: "2em"
  },
  addText: {}
};
