import React, { Component as ReactComponent} from 'react'
import stores from '../stores'

export default (storeNames, getStateFromStores) => {
    storeNames = storeNames || Object.keys(stores)
    return (Component) => class ConnectToStore extends ReactComponent {
        constructor(props) {
            super(props)
            this.state = getStateFromStores(stores, props)
        }

        componentWillReceiveProps(props) {
            this.setState(getStateFromStores(stores, props))
        }

        componentDidMount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.addChangeListener(this.handleStoresChanged)
                )
        }

        componentWillUnmount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.removeChangeListener(this.handleStoresChanged)
                )
        }

        handleStoresChanged = () => {
            this.setState(getStateFromStores(stores, this.props));
        }

        render() {
            return <Component {...this.props} {...this.state}/>
        }
    }
}
//1) в декораторе надо подписываться на изменения в сторах
//2) передавать дочернему компоненту надо не сам стор, а кокой-то набор данных, который должен храниться в state
