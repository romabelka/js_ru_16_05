import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE } from '../constants'
import AppDispatcher from '../dispatcher'
import { loadCommentsCall, loadCommentsForPageCall } from './apiCalls'
import { asyncAC } from './utils'
import { history } from '../routes'

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
    history.push('/comments/1')
}

export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall)
export const loadCommentsForPage = asyncAC(LOAD_COMMENTS_FOR_PAGE, loadCommentsForPageCall)
