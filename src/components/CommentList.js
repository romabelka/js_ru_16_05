import React, {PropTypes, Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        const comments = this.props.comments;

        const isCommentListOpen = this.state.isOpen;
        const toggleTitle = isCommentListOpen ? 'Hide comments' : 'Show comments';
        const commentsItems = isCommentListOpen ? this.fillComments(comments) : null;

        return (
            <section>
                <span onClick = {this.handleClick}>{toggleTitle}</span>
                {commentsItems}
            </section>
        )
    };

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    };

    fillComments = (comments)=> {
        if (!comments || comments.length === 0) return <div>No comments</div>;
        const commentsItems = comments.map((commentItem) => {
            return (
                <li key={commentItem.id}>
                    <Comment comment={commentItem}/>
                </li>
            );
        });
        return <ul>{commentsItems}</ul>
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}


export default CommentList;