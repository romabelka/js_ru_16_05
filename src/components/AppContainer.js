import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectToStore from '../decorators/connectToStore'

class AppContainer extends Component {
    render() {
        return <ArticleList articles = {this.props.articles} />
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getAll()
    }
}

export default connectToStore(['articles', 'comments'], getState)(AppContainer)