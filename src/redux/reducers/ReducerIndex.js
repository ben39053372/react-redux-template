import {combineReducers} from 'redux'

// Additonal Reducers
import counterReducers from './counter';
import listReducers from './list'

export default combineReducers({
  counterReducers,
  listReducers
})
