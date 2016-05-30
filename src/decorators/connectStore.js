import React, { Component } from 'react';
import { stores } from '../stores/';

export default (CustomComponent) => {

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