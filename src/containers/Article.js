import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'
import connectToStore from '../decorators/connectToStore'
import { loadArticleById } from '../AC/articles'

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,

        article: PropTypes.object
    };

    render() {
        const { id, article } = this.props
        return (
            <div>
                <h3>Article id: {id}</h3>
                <Article isOpen = {true} article = {article} />
            </div>
        )
    }
}

function getStateFromProps(stores, props) {
    const { id } = props
    const article = stores.articles.getById(props.id)
    if (!article || (!article.text && !article.loading)) loadArticleById({ id })
    return { article }
}

export default connectToStore(null, getStateFromProps)(ArticleContainer)