import { ADD_COMMENT } from '../constants'
import { normalizedComments} from '../fixtures'
import { fromArray } from '../utils'


const defaultState = {
    entities: fromArray(normalizedComments),
    loading: false
}


export default (comments = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        //case ADD_COMMENT: return comments.concat({...payload.comment, id: randomId})
    }

    return comments
}