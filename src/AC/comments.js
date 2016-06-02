import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS } from '../constants'
import AppDispatcher from '../dispatcher'
import { asyncAC } from './utils'
import { loadArticleCommentsCall } from './apiCalls'

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

export const loadArticleComments = asyncAC(LOAD_ARTICLE_COMMENTS, loadArticleCommentsCall)
//loadArticleComments(id)
