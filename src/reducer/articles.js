import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter(article => article.id != payload.id)

        case ADD_COMMENT: return articles.map(article => payload.articleId != article.id ? article :
            {...article, comments: (article.comments || []).concat(payload.comment.id)}
        )
    }

    return articles
}