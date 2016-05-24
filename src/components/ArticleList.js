import React, { PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'

function ArticleList(props) {
    const { articles } = props
    const articleItems = articles.map((article) => <li key={article.id}><Article article = {article} /></li>)
    return (
        <div>
            <ul>
                {articleItems}
            </ul>
            <Chart articles = {articles}/>
        </div>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList