import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore } from '../stores'

class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
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