import './App.css'
import { useState } from 'react'
import Recipe from './components/Recipe/recipe'
import Footer from './components/Footer/footer'
import Sidebar from './components/Sidebar/sidebar'
import RecipeBrowser from './components/RecipeBrowser/recipe-browser'

function App() {
  

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./icon.png'/>
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