import React from 'react'
import { render } from 'react-dom'
import Article from './components/Article'

const article = {
    id: 1,
    title: 'lorem ipsum',
    text: 'some big text'
}

render(<Article article = {article}/>, document.getElementById('container'))