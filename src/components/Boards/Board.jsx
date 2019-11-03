import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openBoard, fetchAndOpen } from 'store/boards/actions'

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

        this.draggingColumn = null
    }

    onColumnDrag = (ev, id) => {



        this.draggingColumn = this.ejectColumnFromBoard(ev.target)
    }

    pasteElementTo(toEl) {
        const colEl = this.draggingColumn.el
        colEl.parentNode.removeChild(colEl)

        toEl.appendChild(colEl)

        this.draggingColumn = null
    }

    ejectColumnFromBoard = htmlEl => {
        const el = htmlEl,
            elObj = {
                el: el,
                height: el.clientHeight,
                width: el.clientWidth
            }
        console.log(elObj)


        return elObj
    }

    onColumnDrop = ev => {

        console.log('drop', ev)

        this.pasteElementTo(ev.target)
        this.draggedColumn = null
    }


    getColumns() {
        return this.props.board.columns = this.props.board.columns || []
    }

    isDraggedColumn = colId => colId == 1


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
                                    <ColumnWrapper key={i}
                                        isDragged={this.isDraggedColumn(i)}
                                        id={i}
                                        drop={this.onColumnDrop}
                                    >
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