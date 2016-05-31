import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    this.emitChange()
                    break

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken])
                    const article = this.getById(payload.articleId)
                    article.comments = (article.comments  || []).concat(payload.comment.id)
                    this.emitChange()
                    break
            }
        })
    }
}