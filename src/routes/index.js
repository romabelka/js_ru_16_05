import React from 'react'
import { Router, Route } from 'react-router'
import history from './history'
import App from '../RouteHandlers/App'
import ArticlesPage from '../RouteHandlers/ArticlesPage'
import CounterPage from '../RouteHandlers/CounterPage'

export default (
    <Router history = {history}>
        <Route component = {App} path = "/">
            <Route path = "counter" component = {CounterPage} />
            <Route path = "articles" component = {ArticlesPage} />
        </Route>
    </Router>
)