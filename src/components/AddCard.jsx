import React, { Component } from 'react';





class CreateCard extends Component {

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

  addNewCard = () => {
    if (this.state.value !== '') {
      console.log(this.state.value)
    }
  }

  onAddingHide = () => this.setState({
    ...this.defaultState
  })



  render() {

    if (this.state.addingNew) {
      return (
        <React.Fragment>
                <input autoFocus type="text" value={this.state.value} onChange={this.onInputChange} />

                <div>
                  <button className="btn btn-primary"
                    onClick={this.addNewCard}>
                    Create
                  </button>
                  <button className="btn btn-secondary" onClick={this.onAddingHide}>x</button>
                </div>
        </React.Fragment>
      )
    }


    return (
      <div className="add-card" onClick={this.onClick}>
        + add new card
      </div>
    )
  }
}

export default CreateCard;
