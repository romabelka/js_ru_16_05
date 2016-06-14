//import React from 'react'
import { render } from 'react-dom'
import React from 'react'
import Root from './containers/Root'
import store from './store'

render(<Root store = {store}/>, document.getElementById('container'))
