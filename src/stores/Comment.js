import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    this.emitChange()
                    break;
            }
        })
    }
}