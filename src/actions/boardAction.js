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
    console.log('------------------- add action', board)
    fetch('/api/boards/create', {
        method: 'post',
        body: JSON.stringify(board),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(respBoard =>
            dispatch({
                type: NEW_BOARD,
                payload: respBoard
            })
        )
}