import React, { Component } from 'react'
import Column from './Column'
import { connect } from 'react-redux'
import { openBoard, fetchBoards, fetchAndOpen } from '../../actions/boardAction'
import store from '../../store'
class Board extends Component {

    componentDidMount() {
        const boardId = this.props.match.params.id
        const isBoardsLoaded = !this.props.allBoards || !this.props.allBoards.length

        isBoardsLoaded
            ? this.props.fetchAndOpen(boardId)
            : this.props.openBoard(boardId)

    }

    render() {

        return (
            <div>
                {this.props.board === null
                    ? (
                        <span>Loading ...</span>
                    )
                    : (
                        <div>
                            <div> board ({this.props.board._id}): <strong>{this.props.board.name}</strong> </div>

                            <div className="board-all-columns">
                                {
                                    this.props.board.columns
                                        ? (
                                            this.props.board.columns.map(col => <Column key={col.id} name={col.name} />)
                                        )

                                        : (
                                            <div>No Cards</div>
                                        )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}


const mapStateProps = state => ({
    board: state.boards.selected,
    allBoards: state.boards.items
})

const mapActions = {
    openBoard,
    fetchAndOpen
}

export default connect(mapStateProps, mapActions)(Board)