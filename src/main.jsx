import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavigationProvider } from './context/navigation'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
)