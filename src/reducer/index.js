import { combineReducers } from 'redux'
import articles from './articles'
import comments from './comments'
import counterReducer from './counter'

export default combineReducers({
    articles, comments,
    count: counterReducer
})