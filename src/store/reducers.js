import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import asyncReducer from '../common/async/asyncReducer'
import modalReducer from '../common/modals/modalReducer'

const rootReducer = () => combineReducers({
  toastr: toastrReducer,
  async: asyncReducer,
  modals: modalReducer,
})

export default rootReducer
