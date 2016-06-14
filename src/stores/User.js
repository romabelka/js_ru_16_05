import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { SIGN_IN } from '../constants'

export default class User extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case SIGN_IN:
                    this.userName = payload.name
                    break

                default:
                    return
            }
            this.emitChange()
        })
    }
}