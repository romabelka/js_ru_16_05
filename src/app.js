//import React from 'react'
import { render } from 'react-dom'
import React from 'react'
import Counter from './containers/Counter'
import store from './store'
import { increment } from './AC/counter'

function wrappedIncrement(...args) {
    store.dispatch(increment(...args))
}

function renderComponent() {
    render(<Counter count = {store.getState().count} increment = {wrappedIncrement}/>, document.getElementById('container'))
}

renderComponent()

store.subscribe(renderComponent)
