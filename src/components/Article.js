import React, { Component, PropTypes } from 'react';

/*
  component
*/

export default class Article extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		comments: PropTypes.array
	}

	state = {
		isOpen: false
	}

	toggleComments = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	renderComments() {
		const { comments } = this.props;
		let templateComments;

		if (comments) {
			templateComments = comments.map(comment => {
				return (
					<li key={comment.id}>
						<h2>{comment.name}</h2>
						<p>{comment.text}</p>
					</li>
				)

			})
		}

		return templateComments;
	}

	render() {
		const { title, text } = this.props;
		const { isOpen } = this.state;

		if (!title) return <h1>No article</h1>

		return (
			<div className="item">
				<h1>{title}</h1>
				<p onClick={this.toggleComments}>{text}</p>
				{ isOpen && (
					<ul>
						{ this.renderComments() }
					</ul>
				)}
			</div>
		);
	}

}

// хорошее документирование, если придется переиспользовать компонент - propTypes
// 90% переменных в реакт - const
// лайф макросы

// реакт просто перестраивает дерево, не проверяет данные внутри - change state
