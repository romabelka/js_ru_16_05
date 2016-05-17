import React from 'react';

function Article(props) {
  const { article: { title, text, id } } = props;
  return (
  	<div>
  		<h1>{title}</h1>
  		<p>{text}</p>
  	</div>
  );
}

// хорошее документирование, если придется переиспользовать компонент - propTypes
// 90% переменных в реакт - const
// лайф макросы

// реакт просто перестраивает дерево, не проверяет данные внутри - change state
Article.propTypes = {
	article: PropTypes.object.isRequired
};

export default Article;