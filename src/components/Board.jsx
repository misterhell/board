import React, { Component } from "react";
import { connect } from "react-redux";
import { openBoard, fetchAndOpen } from "store/boards/actions";

import Column from "components/Column";
import AddColumn from "components/AddColumn";
import ColumnWrapper from "components/ColumnWrapper";
import PropTypes from "prop-types";

import {
  COLUM_WRAPPER_CLASS_NAME,
  BOARD_COLUMN_CLASS
} from "constants/columns";

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

  draggingColumn = e => {
    // cursor pos
    const { clientX: x, clientY: y } = e;
    // active wrapper
    const activeWrapper = [
      ...document.getElementsByClassName(COLUM_WRAPPER_CLASS_NAME)
    ]
      .filter(el => el.classList.contains("active"))
      .pop();

    // find closest wrapper to drag cursor
    const closestWrapper = this.getClosestWrapper(
      x,
      y,
      this.state.colWrappersOnDrag
    );

    if (activeWrapper && activeWrapper != closestWrapper) {
      activeWrapper.classList.remove("active");
    }
    closestWrapper.classList.add("active");

    const closestCol = [
      ...closestWrapper.getElementsByClassName(BOARD_COLUMN_CLASS)
    ].pop();

    // if x y not 0
    if (x + y) {
      // switch closest coll if it is not dragged
      if (
        this.state.draggedCol &&
        closestCol &&
        closestCol != this.state.draggedCol
      ) {
        const closestWrapper = closestCol.parentNode;
        const draggedWrapper = this.state.draggedCol.parentNode;

        if (closestWrapper.classList.contains("active")) {
          closestWrapper.appendChild(this.state.draggedCol);
          draggedWrapper.appendChild(closestCol);
        }
      }
    }
  };

  getClosestWrapper(x, y, wrappers) {
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

  colDragStart = (e, elId) => {
    this.setState({
      draggedCol: document.getElementById(elId),
      colWrappersOnDrag: [
        ...document.getElementsByClassName(COLUM_WRAPPER_CLASS_NAME)
      ]
    });
  };

  removeActiveClassFromWrappers() {
    this.state.colWrappersOnDrag.map(el => el.classList.remove("active"));
  }

  dragEnd = () => {
    this.removeActiveClassFromWrappers();
    this.setState({
      draggedCol: null,
      colWrappersOnDrag: [],
      nextTick: null
    });
  };

  rearrangeCols() {}

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
                <ColumnWrapper key={i} dropped={this.dropColumn}>
                  <Column
                    dragStart={this.colDragStart}
                    dragging={this.draggingColumn}
                    dragEnd={this.dragEnd}
                    key={`${col.title}-${i}`}
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
