import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { loadAllArticles } from '../AC/articles'
import { toArray } from '../utils'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticlesContainer extends Component {
    static propTypes = {
        articles: PropTypes.object
    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    state = {
        selected: null
    }

    render() {
        const { articles, loading } = this.props
        const { selected } = this.state
        //todo HW move this to Filters container and use redux to filter articles
        const options = articles.map(article => ({
            label: article.get('title'),
            value: article.get('id')
        })).toJS()

        const filteredArticles = articles.filter(article => !selected || !selected.length || selected.find(({value}) => article.get('id') == value))

        return (
            <div>
                <Select
                    options = {options}
                    value = {selected}
                    onChange = {this.handleChange}
                    multi = {true}
                />
                <ArticleList articles = {filteredArticles} loading = {loading}/>
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({selected})
    }
}

export default connect((state) => {
    return {
        articles: state.articles.get('entities').valueSeq(),
        loading: state.articles.get('loading')
    }
}, { loadAllArticles })(ArticlesContainer)