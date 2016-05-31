import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class CommentForm extends Component {
   sendMessage = (ev) =>  {
    let msg = {
        name: findDOMNode(this.refs.name).value,
        text: findDOMNode(this.refs.text).value
    }

    this.props.sendMessage(msg);
    this.cleaneFields();
  }

  cleaneFields() {
    findDOMNode(this.refs.name).value = '';
    findDOMNode(this.refs.text).value = '';
  }

	render() {
		return (
        <div className="form-group">
            <input type="text" defaultValue=''  placeholder='введите значение' ref="name" />
            <textarea ref="text" defaultValue='' placeholder='введите значение' id="" cols="30" rows="5" />
            <button onClick={this.sendMessage} ref='alert_button'>Send</button>
        </div>
      );
	}
}

export default CommentForm