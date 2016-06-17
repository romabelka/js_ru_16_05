import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'

export default (comments = normalizedComments, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT: return comments.concat({...payload.comment, id: randomId})
    }

    return comments
}