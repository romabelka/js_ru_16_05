import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE } from '../constants'

export default class Article extends BasicStore {
    constructor(initialData = []) {
        super(initialData)

        AppDispatcher.register((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    this.emitChange()
                    break;
            }
        })
    }
}