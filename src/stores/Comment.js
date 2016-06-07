import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS, FAIL, LOADING } from '../constants'
import { loadCommentsForPage } from '../AC/comments'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)
        this.pagination = {}

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this._add)
                    break

                case LOAD_COMMENTS_FOR_PAGE + START:
                    this.pagination[payload.page] = LOADING
                    break

                case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
                    this.total = response.total
                    this.pagination[payload.page] = response.records.map(comment => comment.id)
                    response.records.forEach(this._add)
                    break;

                default:
                    return
            }
            this.emitChange()
        })
    }

    getOrLoadForPage = (page) => {
        const pagination = this.pagination[page]
        if (!pagination) loadCommentsForPage({ page })
        if (!pagination || pagination == LOADING) return LOADING
        return pagination.map(this.getById)
    }
}