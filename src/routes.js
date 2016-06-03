import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleContainer from './components/AppContainer'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleContainer}/>
    </Router>
)
