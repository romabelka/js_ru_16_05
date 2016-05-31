import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

import CommentForm from './CommentForm';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
                <CommentForm sendMessage={this.sendMessage} />
            </div>
        )
    }

    sendMessage = (msg) => {
        const { comments } = this.props;
        msg['id'] = comments.length + 1;
        comments.push(msg);
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { isOpen, comments } = this.props
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{items}</ul>
    }
}

export default toggleOpen(CommentList)