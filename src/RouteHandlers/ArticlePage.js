import React, { PropTypes } from 'react'
import Article from '../containers/Article'

function ArticlePage(props) {
    const { params: { id } } = props
    return <Article id = {id}/>
}

ArticlePage.propTypes = {
}

export default ArticlePage