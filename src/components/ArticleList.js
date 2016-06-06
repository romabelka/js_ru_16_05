import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'

class ArticleList extends Component {
    render() {
        const { articles, openItem, isOpen, comments } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isOpen(article.id)}
                toggleOpen = {openItem(article.id)}
                comments = {comments}
            />
        </li>)
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles = {articles}/>
            </div>
        );
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default oneOpen(ArticleList)
