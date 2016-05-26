import React, { PropTypes, Component } from 'react';
import Article from './ArticleOld';
import dataFlowArticle from '../mixins/dataFlowArticle';

import Chart from './Chart';

var ArticleList = React.createClass({
    propTypes: {
         articles: PropTypes.array.isRequired
    },
    mixins: [dataFlowArticle],
    render: function() {
        var articles = this.props.articles;
        var articleItems = articles.map((article) => <li key={article.id}>
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

})

module.exports = ArticleList