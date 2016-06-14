import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import Login from '../containers/Login'
import connectToStore from '../decorators/connectToStore'

class AppRoot extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.props.user
        }
    }

    render() {
        return (
            <div>
                <Login />
                {this.props.children}
            </div>
        )
    }
}

function getState(stores) {
    return {
        user: stores.user.userName
    }
}

export default connectToStore(['user'], getState)(AppRoot)