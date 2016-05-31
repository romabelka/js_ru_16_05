import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export function loadAllArticles() {
    AppDispatcher.dispatch({
        type: LOAD_ALL_ARTICLES + START
    })

    $.get('/api/article')
        .done((response) => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES + SUCCESS,
            response
        }))
        .fail((error) => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES + FAIL,
            error
        }))
}