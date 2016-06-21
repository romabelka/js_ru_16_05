import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START } from '../constants'
import { fromArray } from '../utils'
import { fromJS, List } from 'immutable'

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

        case DELETE_ARTICLE: return state.deleteIn(['entities', payload.id])

        case ADD_COMMENT: return state.updateIn(['entities', payload.articleId, 'comments'],
            new List([]), comments => comments.push(randomId))
    }

    return state
}