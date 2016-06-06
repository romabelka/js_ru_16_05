import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleIndex from './RouteHandlers/ArticlesIndex'
import ArticlePage from './RouteHandlers/ArticlePage'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleIndex}>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
    </Router>
)
