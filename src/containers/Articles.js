import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { loadAllArticles } from '../AC/articles'
import { toArray } from '../utils'

class ArticlesContainer extends Component {
    static propTypes = {
        articles: PropTypes.array
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
        articles: toArray(state.articles.get('entities').toJS()),
        loading: state.articles.get('loading')
    }
}, { loadAllArticles })(ArticlesContainer)