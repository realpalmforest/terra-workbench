import './App.css'
import { useState } from 'react'
import Footer from './components/Footer/footer'
import Sidebar from './components/Sidebar/sidebar'
import SearchBar from './components/SearchBar/search-bar'
import RecipeBrowser from './components/RecipeBrowser/recipe-browser'

export type recipeData = { result: item, ingredients: item[] }
export type item = { name: string, quantity: number, imageUrl: string | undefined }
export type searchParams = { query: string, ingredients: boolean}

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<recipeData>();
  const [browserParams, setBrowserParams] = useState<searchParams>({ query: "", ingredients: false});

  return (
    <>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='./icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>

        <SearchBar paramsChanged={(params: searchParams) => {setBrowserParams(params)}}/>
        <RecipeBrowser selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />
      </div>

      <Sidebar selectedRecipe={selectedRecipe} />

      <Footer/>
    </>
  )
}

export default App