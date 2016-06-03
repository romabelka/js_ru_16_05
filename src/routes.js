import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleIndex from './RouteHandlers/ArticlesIndex'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleIndex}/>
    </Router>
)
