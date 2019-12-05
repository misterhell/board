import React, { Component } from "react";
import { connect } from "react-redux";

import { addNewCard } from "../store/boards/actions";

class CreateCard extends Component {
  defaultState = {
    addingNew: false,
    name: ""
  };

  state = {
    ...this.defaultState
  };

  onClick = () => {
    if (!this.state.addingNew) {
      this.setState({
        addingNew: true
      });
    }
  };

  onInputChange = ev =>
    this.setState({
      name: ev.target.value
    });

  addNewCard = () => {
    if (this.state.name !== "") {
      this.props
        .addNewCard(this.props.columnId, {
          name: this.state.name
        })
        .then(() => {
          this.setState(this.defaultState);
        });
    }
  };

  onAddingHide = () =>
    this.setState({
      ...this.defaultState
    });

  render() {
    if (this.state.addingNew) {
      return (
        <React.Fragment>
          <input
            autoFocus
            type="text"
            name="name"
            value={this.state.name}
            placeholder="card name"
            onChange={this.onInputChange}
          />

          <div>
            <button className="btn btn-primary" onClick={this.addNewCard}>
              Create
            </button>
            <button className="btn btn-secondary" onClick={this.onAddingHide}>
              x
            </button>
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="add-card" onClick={this.onClick}>
        + add new card
      </div>
    );
  }
}

const mapStateProps = state => ({
  board: state.boards.selected
});

const mapActions = {
  addNewCard
};

export default connect(mapStateProps, mapActions)(CreateCard);
