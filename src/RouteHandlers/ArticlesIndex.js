import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'

class ArticlesIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>News app: Articles</h1>
                <Navigation />
            </div>
        )
    }
}

export default ArticlesIndex