import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'

const enhancer = compose(
    applyMiddleware(randomId),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store