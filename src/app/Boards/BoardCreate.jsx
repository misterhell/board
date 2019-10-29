import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBoard } from '../../actions/boardAction'


class BoardCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clickedNew: false,
            name: ''
        };
    }


    handleAddNewClick = () => {
        this.setState(() => ({
            clickedNew: true
        }))
    }


    onInput = event => {
        this.setState({
            name: event.target.value
        })
    }


    addNewBoard = () => {
        console.log('add')
        this.props.addBoard({ name: this.state.name })
    }


    render() {
        return (
            <div style={styles.block}>
                {
                    this.state.clickedNew ?
                        (
                            <div>
                                <input placeholder="name" type="text"
                                    value={this.state.name}
                                    onChange={this.onInput}
                                />

                                <button className="btn btn-success"
                                    onClick={this.addNewBoard}>
                                    Create
                                </button>
                            </div>
                        ) : (
                            <div style={styles.addNewBlock}
                                onClick={this.handleAddNewClick}>
                                <div style={styles.plus}>
                                    +
                                </div>
                                <div>
                                    add new board
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}


const styles = {
    block: {
        display: 'flex', flex: '1', cursor: 'pointer'
    },
    addNewBlock: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#333'
    },
    plus: {
        fontSize: '2em'
    },
    addText: {

    }
}


export default connect(null, { addBoard })(BoardCreate);
