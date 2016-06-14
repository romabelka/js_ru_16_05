import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import AppRoot from './RouteHandlers/AppRoot'
import ArticleRoot from './RouteHandlers/ArticlesRoot'
import ArticleIndex from './RouteHandlers/ArticleIndex'
import ArticlePage from './RouteHandlers/ArticlePage'
import ArticleNew from './RouteHandlers/ArticleNew'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import NotFound from './RouteHandlers/NotFound'

export const history = browserHistory

export default (
    <Router history = {history}>
        <Redirect from = "/" to = "/articles"/>
        <Route path = "/" component = {AppRoot} >
            <Route path = "/articles" component = {ArticleRoot}
                onEnter = {(routes, replace) => console.log(' entering articles ', replace)}
                onLeave = {(...args) => console.log(' leaving articles ', ...args)}
            >
                <IndexRoute component = {ArticleIndex}/>
                <Route path = "new" component = {ArticleNew} />
                <Route path = ":id" component = {ArticlePage} />
                <Route path = "/page/:id" component = {ArticlePage} />
            </Route>
            <Route path = "/comments" component = {CommentsRoot} >
                <IndexRedirect to = "1"/>
                <Route path = ":page" component = {CommentsPage} />
            </Route>
        </Route>
        <Route path = "*" component = {NotFound} />
    </Router>
)
