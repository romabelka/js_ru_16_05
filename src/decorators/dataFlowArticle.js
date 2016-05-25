import React, { Component } from 'react';

export default (CustomComponent) => {
	return class DecoratorComponent extends Component {
		state = {
	        openedArticle: ''
	    }

	    openArticle = id => ev => {
	        if (ev) ev.preventDefault()
	        this.setState({
	            openedArticle: this.state.openedArticle == id ? null : id
	        })
	    }

	    render() {
	    	return (
	    		<CustomComponent
	    			{...this.props}
	    			openedArticle={this.state.openedArticle}
	    			openArticle={this.openArticle} />
	    	);
	    }
	}
}