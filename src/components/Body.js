import React, { PropTypes } from 'react'
//import CommentList from './CommentList'

function Body(props) {
    const { article } = props
    if (!article) return null

    const { text, loading } = article
    if (loading) return <h3>Loading...</h3>

    return (
        <section>
            {text}
            <div>{/*<CommentList article = {article} />*/}</div>
        </section>
    )
}

Body.propTypes = {
    article: PropTypes.object
}

export default Body