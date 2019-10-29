import { FETCH_BOARDS, NEW_BOARD } from '../actions/types'


const initialState = {
    items: []
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


        default:
            return state
    }
}