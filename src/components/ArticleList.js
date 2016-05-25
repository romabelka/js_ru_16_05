import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'

class ArticleList extends Component {
    state = {
        openedArticle: null
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openedArticle: this.state.openedArticle == id ? null : id
        })
    }


    render() {
        const { articles } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.state.openedArticle}
                toggleOpen = {this.openArticle(article.id)}
            />
        </li>)
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles = {articles}/>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList