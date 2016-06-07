import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleRoot from './RouteHandlers/ArticlesRoot'
import ArticleIndex from './RouteHandlers/ArticleIndex'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'

export default (
    <Router history = {browserHistory}>
        <Redirect from = "/" to = "/articles"/>
        <Route path = "/articles" component = {ArticleRoot}>
            <IndexRoute component = {ArticleIndex}/>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path = "/comments" component = {CommentsRoot} >
            <IndexRedirect to = "1"/>
            <Route path = ":page" component = {CommentsPage} />
        </Route>
    </Router>
)
