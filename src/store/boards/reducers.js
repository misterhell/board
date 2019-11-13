import { FETCH_BOARDS, NEW_BOARD, OPEN_BOARD, NEW_COLUMN, NEW_CARD } from './actions'


const initialState = {
    items: [],
    selected: null,
}


export default (state = initialState, action) => {

    switch (action.type) {
        case NEW_BOARD:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case FETCH_BOARDS:
            return {
                ...state,
                items: action.payload
            }

        case OPEN_BOARD:
            return {
                ...state,
                selected: state.items.find(b => b._id === action.payload)
            }

        case NEW_COLUMN:
            const columns = [...state.selected.columns, action.payload]
            return {
                ...state,
                selected: {
                    ...state.selected,
                    columns
                }
            }

        case NEW_CARD:
            const selectedBoard = { ...state.selected }
            const colId = action.payload.column._id

            selectedBoard.columns.map((el, i, arr) => {
                if (el._id == colId) {
                    arr[i].cards.push(action.payload)
                }
            })

            return {
                ...state,
                selected: selectedBoard
            }

        default:
            return state
    }
}