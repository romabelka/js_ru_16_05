import Article from './Article'
import Comment from './Comment'
import BasicStore from './BasicStore'
import { normalizedArticles, normalizedComments } from '../fixtures'


const stores = {};

Object.assign(stores, {
    articles: new Article(stores),
    comments: new Comment(stores)
})

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles

window.stores = stores
