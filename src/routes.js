import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleIndex from './RouteHandlers/ArticlesIndex'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleIndex}>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path = "comments" component = {CommentsRoot} >
            <Route path = ":page" component = {CommentsPage} />
        </Route>
    </Router>
)
