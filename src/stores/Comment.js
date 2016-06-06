import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import {
    ADD_COMMENT,
    LOAD_ALL_COMMENTS,
    START,
    SUCCESS,
    FAIL } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, payload } = action;
            this.dispatchToken = AppDispatcher.register((action) => {
                const { type, payload } = action

                switch (type) {
                    case ADD_COMMENT:
                        this._add(payload.comment)
                        this.emitChange()
                        break;

                    case LOAD_ALL_COMMENTS + START:
                      console.log('LOAD_ALL_COMMENTS + START', this)
                      this.loading = true
                      break

                    case LOAD_ALL_COMMENTS + SUCCESS:
                      console.log('LOAD_ALL_COMMENTS + SUCCESS', this)
                      this.loading = false
                      response.forEach(this.getAll)
                      break

                    case LOAD_ALL_COMMENTS + FAIL:
                      break

                }

                this.emitChange()
            })
        })
    }
}
