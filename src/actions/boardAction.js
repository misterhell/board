import { FETCH_BOARDS, NEW_BOARD } from './types'


const postParams = {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}


export const fetchBoards = () =>
    dispatch => fetch('/api/boards')
        .then(res => res.json())
        .then(boards =>
            dispatch({
                type: FETCH_BOARDS,
                payload: boards
            })
        )



export const addBoard = board =>
    dispatch => fetch('/api/boards/create', {
        ...postParams,
        body: JSON.stringify(board)
    })
        .then(res => res.json())
        .then(respBoard =>
            dispatch({
                type: NEW_BOARD,
                payload: respBoard
            })
        )
