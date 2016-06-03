import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this._add)
                    break

                default:
                    return
            }
            this.emitChange()
        })
    }
}