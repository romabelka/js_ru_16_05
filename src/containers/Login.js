import React, { Component, PropTypes } from 'react'

class AppContainer extends Component {
    state = {
        name: ''
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