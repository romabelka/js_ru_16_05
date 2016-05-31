import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectToStore from '../decorators/connectToStore'
import { loadAllArticles } from '../AC/articles'

class AppContainer extends Component {
    componentDidMount() {
        if (!this.props.articles.length) loadAllArticles()
    }
    render() {
        return <ArticleList articles = {this.props.articles} />
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getAll()
    }
}

export default connectToStore(null, getState)(AppContainer)