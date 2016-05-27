import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore, commentStore } from '../stores'

class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        commentStore.addChangeListener(this.handleChange)
        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
        commentStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    }

    render() {
        return <ArticleList articles = {this.state.articles} />
    }
}

export default AppContainer