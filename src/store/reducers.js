import { combineReducers } from 'redux'
import asyncReducer from '../common/async/asyncReducer'
import modalReducer from '../common/modals/modalReducer'

const rootReducer = () => combineReducers({
  async: asyncReducer,
  modals: modalReducer,
})

export default rootReducer
