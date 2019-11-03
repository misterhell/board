import React, { Component } from 'react';

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
      console.log('add!', this.props.boardId)
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

export default AddColumn;
