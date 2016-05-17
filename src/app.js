import React from 'react'
import { render } from 'react-dom'
import ArticleList from './components/ArticleList'

const articles = [
    {
        id: 11,
        title: 'lorem ipsum',
        text: 'some big text'
    },
    {
        id: 12,
        title: 'Second title',
        text: 'second some big text'
    },
    {
        id: 13,
        title: 'third lorem ipsum',
        text: 'third some big text'
    },
    {
        id: 14,
        title: 'fourth lorem ipsum',
        text: 'fourth some big text'
    }
]

render(<ArticleList articles = {articles}/>, document.getElementById('container'))