import React, { Component, PropTypes } from 'react'
import ArticleList from './../components/ArticleList'
import connectToStore from '../decorators/connectToStore'
import { loadAllArticles } from '../AC/articles'

class AppContainer extends Component {
    render() {
        const { articles, loading } = this.props
        if (loading) return <h1>Loading...</h1>
        return <ArticleList articles = {articles} />
    }
}

function getState(stores) {
    const { articles } = stores
    if (!articles.getAll().length && !articles.loading) loadAllArticles()
    return {
        loading: articles.loading,
        articles: articles.getAll()
    }
}

export default connectToStore(['articles'], getState)(AppContainer)