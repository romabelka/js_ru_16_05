import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START } from '../constants'
import { fromArray } from '../utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    entities: {},
    loading: false
})

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('loading', false)
                .update('entities', entities => entities.merge(fromJS(fromArray(response))))
//            return {...state, loading: false, entities: {...state.entities, ...fromArray(response)}}

/*
        case DELETE_ARTICLE: return articles.filter(article => article.id != payload.id)

        case ADD_COMMENT: return articles.map(article => payload.articleId != article.id ? article :
            {...article, comments: (article.comments || []).concat(randomId)}
        )
*/
    }

    return state
}