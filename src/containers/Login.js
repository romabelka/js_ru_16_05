import React, { Component, PropTypes } from 'react'
import { signIn } from '../AC/user'

class AppContainer extends Component {
    state = {
        name: ''
    }

    static contextTypes = {
        user: PropTypes.string
    }

    render() {
        return (
        <div>
            <section>
                Please input your name:
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.name} onChange = {this.handleChange}/>
                </form>
           </section>
            {this.props.children}
        </div>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        signIn(this.state.name)

        this.setState({
            name: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }
}

export default AppContainer