import React, { Component, PropTypes } from 'react';

/**
 * dependencies
 */

 import Article from './Article';

/*
  component
*/

export default class ArticleList extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	}

	renderArticlesList() {
		const { data } = this.props;

		const templateList = data.map(article => {
			return (
				<li key={article.id}>
					<Article
						title={article.title}
						text={article.text}
						comments={article.comments} />
				</li>
			)
		});

		return templateList;
	}

	render() {
		return (
			<ul>
				{ this.renderArticlesList() }
			</ul>
		);
	}

}