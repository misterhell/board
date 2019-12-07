import React, { Component } from "react";
import { connect } from "react-redux";
import { openBoard, fetchAndOpen } from "store/boards/actions";

import Column from "components/Column";
import AddColumn from "components/AddColumn";
import ColumnWrapper from "components/ColumnWrapper";
import PropTypes from "prop-types";

import { COLUM_WRAPPER_CLASS_NAME, BOARD_COLUMN_CLASS_NAME } from "constants.js";

import { DRAG_CARD_EVENT_NAME, DRAG_COLUMN_EVENT_NAME } from "../constants";

class Board extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired
  };

  static defaultProps = {
    columns: []
  };

  state = {
    colWrappersOnDrag: [],
    draggedCol: null
  };

  componentDidMount() {
    this.openBoard();
  }

  openBoard() {
    const boardId = this.props.match.params.id;
    const isBoardsLoaded =
      !this.props.allBoards || !this.props.allBoards.length;

    isBoardsLoaded
      ? this.props.fetchAndOpen(boardId)
      : this.props.openBoard(boardId);
  }

  draggingEvent = (dragType, e) => {
    if (dragType === DRAG_COLUMN_EVENT_NAME) {
      this.columnDragEvent(e)
    } else if (dragType === DRAG_CARD_EVENT_NAME) {
      this.cardDragEvent(e)
    }
  };



  // cardDragEvent(e) {
  //   const { clientX: x, clientY: y } = e;

  //   const closestColumn



  // }


  columnDragEvent(e) {
    // cursor pos
    const { clientX: x, clientY: y } = e;
    // active wrapper
    const activeWrapper = [
      ...document.getElementsByClassName(COLUM_WRAPPER_CLASS_NAME)
    ]
      .filter(el => el.classList.contains("active"))
      .pop();

    // find closest wrapper to drag cursor
    const closestWrapper = this.getClosestElement(
      x,
      y,
      this.state.colWrappersOnDrag
    );

    if (activeWrapper && activeWrapper != closestWrapper) {
      activeWrapper.classList.remove("active");
    }
    closestWrapper.classList.add("active");

    const closestCol = [
      ...closestWrapper.getElementsByClassName(BOARD_COLUMN_CLASS_NAME)
    ].pop();

    // if x y not 0
    if (x + y) {
      // switch closest coll if it is not dragged
      if (
        this.state.draggedEl &&
        closestCol &&
        closestCol != this.state.draggedEl
      ) {
        const closestWrapper = closestCol.parentNode;
        const draggedWrapper = this.state.draggedEl.parentNode;

        if (closestWrapper.classList.contains("active")) {
          closestWrapper.appendChild(this.state.draggedEl);
          draggedWrapper.appendChild(closestCol);
        }
      }
    }
  }

  getClosestElement(x, y, wrappers) {
    return wrappers
      .map(el => ({
        el: el,
        range: Math.abs(el.offsetLeft - x) + Math.abs(el.offsetTop - y)
      }))
      .sort((a, b) => {
        if (a.range > b.range) return -1;
        if (a.range < b.range) return 1;
        return 0;
      })
      .map(obj => obj.el)
      .pop();
  }

  dragStart = (e, el) => {
    this.setState({
      draggedEl: el,
      colWrappersOnDrag: [
        ...document.getElementsByClassName(COLUM_WRAPPER_CLASS_NAME)
      ]
    });
  };


  removeActiveClassFromWrappers() {
    this.state.colWrappersOnDrag.map(el => el.classList.remove("active"));
    return this
  }

  dragEnd = () => {
    this.removeActiveClassFromWrappers()
      .rearrangeCols();

    this.setState({
      draggedCol: null,
      colWrappersOnDrag: [],
      nextTick: null
    });
  };

  rearrangeCols() { }

  render() {
    const { board } = this.props;

    if (!board) return <span>Loading ...</span>;

    return (
      <div>
        <h5>
          board: <strong>{board.name}</strong>{" "}
        </h5>

        <div className="board-all-columns">
          {board.columns &&
            board.columns.map((col, i) => {
              return (
                <ColumnWrapper key={i}>
                  <Column
                    dragStart={this.dragStart}
                    dragging={this.draggingEvent}
                    dragEnd={this.dragEnd}
                    key={`${col._id}-${i}`}
                    column={col}
                    id={col._id}
                    cards={col.cards}
                  />
                </ColumnWrapper>
              );
            })}
          <AddColumn boardId={board._id} />
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  board: state.boards.selected,
  allBoards: state.boards.items
});

const mapActions = {
  openBoard,
  fetchAndOpen
};

export default connect(mapStateProps, mapActions)(Board);
