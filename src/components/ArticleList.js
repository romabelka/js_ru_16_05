import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'

class ArticleList extends Component {
    render() {
        const { articles, loading, openItem, isOpen } = this.props
        const articleItems = articles.map((article) => <li key={article.get('id')}>
            <Article article = {article}
                isOpen = {isOpen(article.get('id'))}
                toggleOpen = {openItem(article.get('id'))}
            />
        </li>)

        const loader = loading ? <h3>Loading...</h3> : null

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                {loader}
                <Chart articles = {articles}/>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default oneOpen(ArticleList)