import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import Login from '../containers/Login'
import { Link } from 'react-router'

class AppRoot extends Component {
    static propTypes = {

    };

/*
    state = {
        user: null
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }
*/

    render() {
        return (
            <div>
                <Login />
                {this.props.children}
            </div>
        )
    }
}

export default AppRoot