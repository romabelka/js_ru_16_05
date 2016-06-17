import { ADD_COMMENT } from '../constants'

export function addComment(articleId, comment) {
    const id = Date.now()

    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    }
}