import './App.css'
import { useState } from 'react'
import Recipe from './components/Recipe'
import Footer from './components/Footer'

function App() {
  const [recipeScale, setRecipeScale] = useState(65)

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./src/assets/icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>
      
        

        <br/>

        <div className='recipe-container' style={{zoom: `${recipeScale}%`}}>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
        </div>
      </div>

      <div className='sidebar'>

      </div>

      <Footer/>
    </>
  )
}

export default App