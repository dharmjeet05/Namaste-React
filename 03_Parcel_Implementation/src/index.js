import React from "react"
import ReactDOM from 'react-dom'

const mainDiv = React.createElement('div', {}, [
  React.createElement('h1', {"id": "hello"}, 'Hello'),
  React.createElement('p', {}, 'Welcome to the dream')
])
    
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(mainDiv)