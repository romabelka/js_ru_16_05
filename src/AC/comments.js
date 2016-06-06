import AppDispatcher from '../dispatcher'
import { LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { asyncAC } from './utils'
import { loadAllСommentsCall } from './apiCalls'

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadAllСomments = asyncAC(LOAD_ALL_COMMENTS, loadAllСommentsCall)
//loadAllСomments()