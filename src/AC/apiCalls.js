import $ from 'jquery'

export function loadAllArticlesCall() {
    return $.get('/api/article')
}

export function loadArticleCall({ id }) {
    return $.get(`api/article/${id}`)
}

export function loadCommentsCall( { id }) {
    return $.get(`/api/comment?article=${id}`)
}

export function loadCommentsForPageCall({ page }) {
    return $.get(`/api/comment?limit=10&offset=${(page - 1) * 10}`)
}