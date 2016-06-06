import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

import { loadAllСomments } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    componentWillReceiveProps(newProps) {
        const { isOpen, article } = newProps;
        console.log('componentWillReceiveProps newProps CommentList', newProps);
    }

    componentDidMount() {

    }

    render() {
        console.log('CommentList', this);
        return (
            <div>
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
        
        let comments = article.getRelation('comments')
        
        console.log('this.props', this.props);
        console.log('comments', comments);
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
            <li><NewCommentForm articleId = {article.id} /></li>
        </ul>
    }
}

export default toggleOpen(CommentList)
