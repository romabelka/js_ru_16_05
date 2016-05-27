import Article from './Article'
import { articles } from '../fixtures'

export const articleStore = new Article(articles)

window.articleStore = articleStore