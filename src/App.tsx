import './App.css'
import { useState } from 'react'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import RecipeBrowser from './components/RecipeBrowser'

function App() {
  

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./public/icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>
        
        <RecipeBrowser/>
      </div>

      <Sidebar/>

      <Footer/>
    </>
  )
}

export default App