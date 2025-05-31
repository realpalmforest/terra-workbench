import './App.css'
import { useEffect, useState } from 'react'
import Footer from './components/Footer/footer'
import Sidebar from './components/Sidebar/sidebar'
import SearchBar from './components/SearchBar/search-bar'
import RecipeBrowser from './components/RecipeBrowser/recipe-browser'

export type recipeData = { result: item, ingredients: item[], id: number }
export type item = { name: string, quantity: number }
export type searchParams = { query: string, searchIngredients: boolean, showAlternatives: boolean }

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<recipeData>();
  const [searchParams, setSearchParams] = useState<searchParams>({ query: "", searchIngredients: false, showAlternatives: false });

  useEffect(() => {
    console.log(selectedRecipe);
  }, [selectedRecipe]);
  
  return (
    <>
      <div className='page-background'/>
      <div className='left-side'>
        <div className='header'>
          <img className='icon' src='images/icon.png'/>
          <h1>TerraWorkbench</h1>
        </div>

        <SearchBar paramsChanged={(params: searchParams) => {setSearchParams(params)}}/>
        <RecipeBrowser params={searchParams} setSelectedRecipe={setSelectedRecipe} />
      </div>

      <Sidebar selectedRecipe={selectedRecipe} />

      <Footer/>
    </>
  )
}

export default App