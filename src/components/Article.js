import React, { PropTypes } from 'react'

function Article(props) {
    const { article } = props
    if (!article) return <h3>No article</h3>

    const { title, text, id } = article
    return (
        <div>
            <h3>{title}</h3>
            <section>{text}</section>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.number.isRequired
    })
}

export default Article