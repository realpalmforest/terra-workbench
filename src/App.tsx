import './App.css'
import { useState } from 'react'
import Recipe from './components/Recipe'
import Slider from './components/Slider'

function App() {
  const [recipeScale, setRecipeScale] = useState(85)

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./src/assets/icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>
      
        <Slider scale={recipeScale} changeScale={setRecipeScale} />

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
        </div>
      </div>

      <div className='sidebar'>

      </div>
    </>
  )
}

export default App