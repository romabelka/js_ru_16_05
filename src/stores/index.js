import Article from './Article'
import Comment from './Comment'
import User from './User'
import BasicStore from './BasicStore'
import { normalizedArticles, normalizedComments } from '../fixtures'


const stores = {};

Object.assign(stores, {
    articles: new Article(stores),
    comments: new Comment(stores),
    user: new User(stores)
})

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles
export const userStore = stores.user

window.stores = stores
