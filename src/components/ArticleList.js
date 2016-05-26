import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'

import dataFlowArticle from '../decorators/dataFlowArticle';

class ArticleList extends Component {
    render() {
        const { articles, openedArticle, openArticle } = this.props
        const articleItems = articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article
                        article = {article}
                        isOpen = {article.id == openedArticle}
                        toggleOpen = {openArticle(article.id)} />
                </li>
            );
        });

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

    // From dataFlow decorator
    openedArticle: PropTypes.string.isRequired,
    openArticle: PropTypes.func.isRequired
}

export default dataFlowArticle(ArticleList);