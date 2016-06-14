import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action
    return articles
}