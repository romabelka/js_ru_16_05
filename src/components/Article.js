import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            some: ''
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        if (!article) return <h3>No article</h3>

        const { title, text, comments, id } = article
        const textItem = isOpen ? <section>{text}<div><CommentList comments = {comments} /></div></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {textItem}
            </div>
        )
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),

    //From toggleOpen decorator
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(Article)