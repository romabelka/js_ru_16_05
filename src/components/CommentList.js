import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
                {this.renderInputMessage()}
            </div>
        )
    }

    sendMessage = (ev) =>  {
        let msg = {
            name: findDOMNode(this.refs.name).value,
            text: findDOMNode(this.refs.text).value
        }

        this.props.sendMessage(msg);
        this.cleaneFields();
    }

    cleaneFields() {
        findDOMNode(this.refs.name).value = '';
        findDOMNode(this.refs.text).value = '';
    }

    renderInputMessage() {
        return (
            <div className="form-group">
                <input type="text" defaultValue=''  placeholder='введите значение' ref="name" />
                <textarea ref="text" defaultValue='' placeholder='введите значение' id="" cols="30" rows="10" />
                <button onClick={this.sendMessage} ref='alert_button'>Send</button>
            </div>
        );
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