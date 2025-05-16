import './App.css'
import { useState } from 'react'
import Recipe from './components/Recipe/recipe'
import Footer from './components/Footer/footer'
import Sidebar from './components/Sidebar/sidebar'
import RecipeBrowser, { recipeData } from './components/RecipeBrowser/recipe-browser'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<recipeData>();

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>
        
        <RecipeBrowser selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />
      </div>

      <Sidebar selectedRecipe={selectedRecipe} />

      <Footer/>
    </>
  )
}

export default App