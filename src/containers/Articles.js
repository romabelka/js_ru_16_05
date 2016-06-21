import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { loadAllArticles } from '../AC/articles'
import { toArray } from '../utils'

class ArticlesContainer extends Component {
    static propTypes = {
        articles: PropTypes.object
    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} loading = {this.props.loading}/>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        articles: state.articles.get('entities').valueSeq(),
        loading: state.articles.get('loading')
    }
}, { loadAllArticles })(ArticlesContainer)