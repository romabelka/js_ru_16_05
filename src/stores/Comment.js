import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    this.emitChange()
                    break;

                case LOAD_ARTICLE_COMMENTS + START:
                    break

                case LOAD_ARTICLE_COMMENTS + SUCCESS:
                    response.forEach((comment) => {
                        if(!this.getById(comment.id)) {
                            this._add(comment)
                        }
                    })
                    break

                case LOAD_ARTICLE_COMMENTS + FAIL:
                    break

                default:
                    return
            }
            this.emitChange()
        })
    }
}
