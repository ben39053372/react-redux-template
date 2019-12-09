import {combineReducers} from 'redux'

import counterReducers from './counter';
import listReducers from './list'

export default combineReducers({
  counterReducers,
  listReducers
})
