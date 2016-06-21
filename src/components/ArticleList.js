import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './animation.css'

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
                <CSSTransition component = "ul" transitionName = "articles" transitionEnterTimeout = {500} transitionLeaveTimeout = {300}>
                    {articleItems}
                </CSSTransition>
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