import { FETCH_BOARDS, NEW_BOARD, OPEN_BOARD } from './actions'


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
                selected: state.items.find(b => b._id === action.payload.boardId)
            }

        default:
            return state
    }
}