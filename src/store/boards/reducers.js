import { FETCH_BOARDS, NEW_BOARD, OPEN_BOARD, NEW_COLUMN } from './actions'


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

        default:
            return state
    }
}