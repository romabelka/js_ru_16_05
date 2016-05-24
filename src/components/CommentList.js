import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {this.toggleOpen}>{text}</a>
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getList() {
        if (!this.state.isOpen) return null
        const { comments } = this.props
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{items}</ul>
    }
}

export default CommentList