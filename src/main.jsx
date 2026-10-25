import { createContext, createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListItem from './list/ListItem'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './list/List'



createRoot(document.getElementById('root')).render(
  <div className="app">
   
    <Header />
    <div className="app-body">
      <List />
    </div>
    <Footer />
  </div>,
)
