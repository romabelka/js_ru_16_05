import React from 'react';
import { render } from 'react-dom';
import ArticleList from './components/ArticleList';

// компонент:
// - что должен делать
// - какие данные должен принимать

var articles = JSON.parse(require('../data/articles.json'));

render(<ArticleList data={articles} />, document.getElementById('container'));
