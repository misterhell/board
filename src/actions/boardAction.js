import { FETCH_BOARDS, NEW_BOARD } from './types'




export const fetchBoards = () => dispatch => {
    fetch('/api/boards')
        .then(res => res.json())
        .then(boards =>
            dispatch({
                type: FETCH_BOARDS,
                payload: boards
            })
        )
}


export const addBoard = board => dispatch => {
    fetch('/api/boards/create', {
        method: 'post',
        body: JSON.stringify(board)
    })
        .then(res => res.json())
        .then(board =>
            dispatch({
                type: NEW_BOARD,
                payload: board
            })
        )
}