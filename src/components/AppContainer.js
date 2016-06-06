import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectToStore from '../decorators/connectToStore'
import { loadAllArticles } from '../AC/articles'

class AppContainer extends Component {
    render() {
        const { articles, loading, comments } = this.props
        if (loading) return <h1>Loading...</h1>
        return <ArticleList articles = {articles} comments={comments} />
    }
}

function getState(stores) {
    const { articles, comments } = stores
    if (!articles.getAll().length && !articles.loading) loadAllArticles()
    return {
        loading: articles.loading,
        articles: articles.getAll(),
        comments: comments.getAll()
    }
}

export default connectToStore(null, getState)(AppContainer)

