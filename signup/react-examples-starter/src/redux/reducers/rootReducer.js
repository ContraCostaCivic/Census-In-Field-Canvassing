import {combineReducers} from 'redux'
import animals from './animals'
import colors from './colors'

const rootReducer = combineReducers({
  animals,
  colors,
})

export default rootReducer