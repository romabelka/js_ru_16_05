import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false,
        some: 'other'
    }

    render() {
        const { article } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const { isOpen } = this.state
        const textItem = isOpen ? <section>{text}<div><CommentList comments = {comments} /></div></section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {textItem}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    })
}

export default Article