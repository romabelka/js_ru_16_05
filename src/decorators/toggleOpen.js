//also know as HOC higher order components
import React, { Component } from 'react'

export default (CustomComponent) => {
    return class DecoratedComponent extends Component {
        state = {
            isOpen: true
        }

        render() {
            return <CustomComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
        }

        toggleOpen = (ev) => {
            if (ev) ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}