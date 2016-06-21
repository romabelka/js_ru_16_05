import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadCommentsForArticle } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { getRelation } from '../utils'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    static contextTypes = {
        router: PropTypes.object,
        user: PropTypes.string
    }

    componentWillReceiveProps({ isOpen, article, loadCommentsForArticle }) {
        if (!isOpen || article.get('loadedComments') || article.get('loadingComments')) return
        loadCommentsForArticle(article.get('id'))
    }

    render() {
        return (
            <div>
                <h3>Hello {this.context.user}</h3>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { isOpen, article } = this.props

        const comments = getRelation(article, 'comments')
        if (!isOpen) return null

        if (!article.get('loadedComments')) return <h3>Loading...</h3>

        if (!comments || !comments.size) return <h3>No comments yet</h3>

        const items = comments.map(comment => <li key = {comment.get('id')}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
            <li><NewCommentForm articleId = {article.get('id')} /></li>
        </ul>
    }
}

export default connect(null, { loadCommentsForArticle })(toggleOpen(CommentList))