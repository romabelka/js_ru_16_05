import React from 'react'
import { render } from 'react-dom'
import ArticleList from './components/ArticleList'
import { articleStore } from './stores'

render(<ArticleList articles = {articleStore.getAll()}/>, document.getElementById('container'))