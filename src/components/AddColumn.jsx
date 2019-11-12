import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createColumn } from 'store/boards/actions'


class AddColumn extends Component {

  defaultState = {
    addingNew: false,
    value: ''
  }


  state = {
    ...this.defaultState
  }



  onClick = () => {
    if (!this.state.addingNew) {
      this.setState({
        addingNew: true
      })
    }
  }

  onInputChange = ev => this.setState({
    value: ev.target.value
  })

  addNewColumn = ev => {
    if (this.state.value !== '') {
      this.props.createColumn({ name: this.state.value }, this.props.board._id)
    }
  }

  onAddingHide = () => this.setState({
    ...this.defaultState
  })


  render() {


    return (
      <div className="board-column create-column" onClick={this.onClick}>
        {
          this.state.addingNew
            ? (
              <React.Fragment>
                <input autoFocus type="text" value={this.state.value} onChange={this.onInputChange} />

                <div>
                  <button className="btn btn-primary"
                    onClick={this.addNewColumn}>
                    Create
                  </button>
                  <button className="btn btn-secondary" onClick={this.onAddingHide}>x</button>
                </div>
              </React.Fragment>
            )
            : (
              <div>
                + Create new column
              </div>
            )
        }
      </div>
    );
  }
}


const mapStateProps = state => ({
  board: state.boards.selected,
}) 

const mapActions = {
  createColumn
}

export default connect(mapStateProps, mapActions)(AddColumn);
