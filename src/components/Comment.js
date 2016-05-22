/**
 * Created by denis on 5/22/16.
 */
import React, {PropTypes, Component} from 'react';

class Comment extends Component {
    render() {
        const {name, text} = this.props.comment;
        return (
            <div>
                <span>{name}</span>
                <br/>
                <span>{text}</span>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;