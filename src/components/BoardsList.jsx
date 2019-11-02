import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBoards } from 'store/boards/actions'
import BoardWrapper from './Boards/BoardWrapper'
import CreateNewBoard from './Boards/BoardCreate'




class BoardsList extends Component {

    componentDidMount() {
        this.props.fetchBoards()
    }


    render() {
        return (
            <div>
                <div style={{ fontSize: '1.5em', padding: '0.8em', margin: '0.8em' }}>
                    My boards list
                    </div>

                <div className="boards-list">
                    {
                        this.props.boards.map(board =>
                            <BoardWrapper key={board._id}>
                                <Link to={`/board/${board._id}`}
                                    style={{ textDecoration: 'none' }}
                                    className={'board-content'}>
                                    <span>
                                        {board.name}
                                    </span>
                                    <small>
                                        {board.title}
                                    </small>
                                </Link>
                            </BoardWrapper>
                        )
                    }

                    <BoardWrapper>
                        <div className={'board-content'}>
                            <CreateNewBoard />
                        </div>
                    </BoardWrapper>
                </div>

            </div>
        );
    }
}









const mapStateProps = state => ({
    boards: state.boards.items
})

export default connect(mapStateProps, { fetchBoards })(BoardsList)