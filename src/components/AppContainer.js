import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectStore from '../decorators/connectStore'

class AppContainer extends Component {

    render() {
        const { stores: { articles, comments } } = this.props;
        return <ArticleList articles = {articles.getAll()} />
    }
}

export default connectStore(AppContainer);