import React from 'react';
import { render } from 'react-dom';
import Article from './components/Article';

// что должен делать
// какие данные должен принимать

const article = {
	id: 1,
	title: 'xxx',
	text: 'yyyy'
}

render(<Article article={article} />, document.getElementById('container'));
