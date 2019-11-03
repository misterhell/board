import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openBoard, fetchAndOpen } from 'store/boards/actions'
import PropTypes from 'prop-types'

import Column from 'components/Columns/Column'
import AddColumn from 'components/Columns/AddColumn'
import ColumnWrapper from 'components/Columns/ColumnWrapper'




class Board extends Component {

    componentDidMount() {
        const boardId = this.props.match.params.id
        const isBoardsLoaded = !this.props.allBoards || !this.props.allBoards.length

        isBoardsLoaded
            ? this.props.fetchAndOpen(boardId)
            : this.props.openBoard(boardId)

        this.draggedColumn = null
    }

    onColumnDrag = ev => {
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.dropEffect = 'move'
        ev.dataTransfer.setData('dragged-element', 'text-to-drag');
        

        this.draggedColumn = ev.target
    }

    onColumnDrop = ev => {
        
        console.log('drop',ev)
        console.log(ev.dataTransfer.getData('element-id'))
        this.draggedColumn = ev.target
    }


    getColumns() {
        return this.props.board.columns = this.props.board.columns || []
    }


    render() {


        if (this.props.board === null)
            return <span>Loading ...</span>




        return (
            <div>
                <h5> board: <strong>{this.props.board.name}</strong> </h5>

                <div className="board-all-columns">
                    {
                        this.getColumns()
                            .map((col, i) => {
                                return (
                                    <ColumnWrapper key={i} drop={this.onColumnDrop}>
                                        <Column
                                            id={i}
                                            column={col}
                                            dragging={this.onColumnDrag}
                                        />
                                    </ColumnWrapper>
                                )
                            })

                    }
                    <AddColumn boardId={this.props.board._id} />
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