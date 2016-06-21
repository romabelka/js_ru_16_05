import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, SUCCESS, START, FAIL } from '../constants'
import { normalizedComments} from '../fixtures'
import { fromArray } from '../utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    entities: {},
    loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId.toString()], fromJS({...payload.comment, id: randomId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.update('entities', entities => entities.merge(fromJS(fromArray(response))))
    }

    return comments
}