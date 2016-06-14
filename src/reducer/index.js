import { combineReducers } from 'redux'
import articles from './articles'
import counterReducer from './counter'

export default combineReducers({
    articles,
    count: counterReducer
})