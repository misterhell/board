import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openBoard, fetchAndOpen } from 'store/boards/actions'

import Column from 'components/Columns/Column'
import AddColumn from 'components/Columns/AddColumn'
import ColumnWrapper from 'components/Columns/ColumnWrapper'
import PropTypes from 'prop-types';



class Board extends Component {

    static propTypes = {
        columns: PropTypes.array.isRequired
    }

    static defaultProps = {
        columns: []
    }


    componentDidMount() {
        const boardId = this.props.match.params.id
        const isBoardsLoaded = !this.props.allBoards || !this.props.allBoards.length

        isBoardsLoaded
            ? this.props.fetchAndOpen(boardId)
            : this.props.openBoard(boardId)
    }




    render() {
        const { board } = this.props


        if (board === null)
            return <span>Loading ...</span>


        return (
            <div>
                <h5> board: <strong>{this.props.board.name}</strong> </h5>

                <div className="board-all-columns">
                    {
                        board.columns && board.columns.map((col, i) => {
                            return (
                                <ColumnWrapper key={i}

                                >
                                    <Column

                                        key={`${col.title}-${i}`}
                                        column={col}
                                        id={col._id}
                                        cards={col.cards}
                                    />
                                </ColumnWrapper>
                            )
                        })

                    }
                    <AddColumn boardId={board._id} />
                </div>
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