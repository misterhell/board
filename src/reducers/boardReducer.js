import { FETCH_BOARDS, NEW_BOARD } from '../actions/types'


const initialState = {
    boards: [],
    board: {}
}


export default (state = initialState, action) => {

    switch (action.type) {
        case NEW_BOARD:

        case FETCH_BOARDS:

        default:
            return state
    }
}