import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBoards } from '../actions/boardAction'

class BoardsList extends Component {

    componentWillMount() {
        this.props.fetchBoards()
    }


    render() {
        return (
            <div>
                <h2>My boards list</h2>
                <ul>
                    {
                        this.props.boards.map(board => <li key={board._id}>
                            <Link to={`/board/${board._id}`}>{board.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}


const mapStateProps = state => ({
    boards: state.boards.items
})

export default connect(mapStateProps, { fetchBoards })(BoardsList)