import $ from 'jquery'

export function loadAllArticlesCall() {
    return $.get('/api/article')
}