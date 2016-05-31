import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import { asyncAC } from './utils'
import { loadAllArticlesCall } from './apiCalls'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export const loadAllArticles = asyncAC(LOAD_ALL_ARTICLES, loadAllArticlesCall)