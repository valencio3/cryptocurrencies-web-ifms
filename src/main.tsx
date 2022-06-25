import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import FontStyles from './assets/fonts/fonts'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <FontStyles />
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )


const container = document.getElementById('root') as HTMLElement;

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <FontStyles />
    <App />
  </BrowserRouter>
</React.StrictMode>
);