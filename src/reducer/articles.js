import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START } from '../constants'
import { fromArray } from '../utils'


const defaultState = {
    entities: {},
    loading: false
}

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return {...state, loading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {...state, loading: false, entities: {...state.entities, ...fromArray(response)}}

/*
        case DELETE_ARTICLE: return articles.filter(article => article.id != payload.id)

        case ADD_COMMENT: return articles.map(article => payload.articleId != article.id ? article :
            {...article, comments: (article.comments || []).concat(randomId)}
        )
*/
    }

    return state
}