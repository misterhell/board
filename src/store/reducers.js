import { combineReducers } from 'redux'
import boardReducers from './boards/reducers'



export default combineReducers({
    boards: boardReducers
})