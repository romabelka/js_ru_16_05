import React, { Component, PropTypes } from 'react'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h3>Article id: {this.props.id}</h3>
            </div>
        )
    }
}

export default Article