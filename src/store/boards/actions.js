export const FETCH_BOARDS = 'FETCH_BOARDS'
export const NEW_BOARD = 'NEW_BOARD'
export const OPEN_BOARD = 'OPEN_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'

export const NEW_COLUMN = 'NEW_COLUMN'

export const NEW_CARD = 'NEW_CARD'




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


export const openBoard = boardId =>
    dispatch => dispatch({
        type: OPEN_BOARD,
        payload: boardId

    })

export const fetchAndOpen = boardId =>
    dispatch => dispatch(fetchBoards())
        .then(() => dispatch(openBoard(boardId)))


export const createColumn = (column, boardId) =>
    dispatch => fetch('/api/columns/create', {
        ...postParams,
        body: JSON.stringify({ column, boardId })
    })
        .then(res => res.json())
        .then(col =>
            dispatch({
                type: NEW_COLUMN,
                payload: col
            })
        )


export const addNewCard = (columnId, card) =>
    dispatch => fetch('/api/cards/create', {
        ...postParams,
        body: JSON.stringify({ columnId, card })
    })
        .then(resp => resp.json())
        .then(card => {
            dispatch({
                type: NEW_CARD,
                payload: card
            })
        })
