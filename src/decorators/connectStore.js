import React, { Component } from 'react';
import { stores } from '../stores/';

export default (CustomComponent) => {
	//1) в декораторе надо подписываться на изменения в сторах
	//2) передавать дочернему компоненту надо не сам стор, а кокой-то набор данных, который должен храниться в state
	return class DecoratorComponent extends Component {
		constructor() {
	        super();
	        this.state = {
	            stores: stores
	        }
	    }

	    render() {
	    	return (
	    		<CustomComponent {...this.props} stores={this.state.stores} />
	    	);
	    }
	}
}
