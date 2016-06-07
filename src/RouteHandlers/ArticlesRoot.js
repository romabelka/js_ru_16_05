import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'

class ArticlesIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>News app: Articles</h1>
                <Link to="/articles/new">New article</Link>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default ArticlesIndex