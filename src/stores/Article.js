import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_COMMENTS_FOR_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID,
    START, SUCCESS, FAIL } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response, error } = action
            let article
            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken])
                    article = this.getById(payload.articleId)
                    article.comments = (article.comments  || []).concat(payload.comment.id)
                    break

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break

                case LOAD_ALL_ARTICLES + SUCCESS:
                    this.loading = false
                    response.forEach(this._add)
                    break

                case LOAD_ALL_ARTICLES + FAIL:
                    break

                case LOAD_ARTICLE_BY_ID + START:
                    article = this.getById(payload.id)
                    if (!article) this._add({ id: payload.id, loading: true })
                    else article.loading = true
                    break;

                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this._add(response)
                    break

                case LOAD_ARTICLE_BY_ID + FAIL:
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    Object.assign(this.getById(payload.id), {
                        loadingComments: true
                    })
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken])
                    Object.assign(this.getById(payload.id), {
                        loadingComments: false,
                        loadedComments: true
                    })
                    break

                default:
                    return
            }
            this.emitChange()
        })
    }
}