import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'

class ArticlesContainer extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default connect((state) => {
    return {
        articles: state.articles
    }
})(ArticlesContainer)