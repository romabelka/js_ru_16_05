import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import connectToStore from '../decorators/connectToStore'
import { loadAllArticles } from '../AC/articles'

class AppContainer extends Component {
    render() {
        const { articles, loading } = this.props
        if (loading) return <h1>Loading...</h1>
        const links = articles.map(({ id, title}) => <li key={id}><Link to={`/articles/${id}`}>{title}</Link></li>)
        return <ul>{links}</ul>
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

export default connectToStore(null, getState)(AppContainer)