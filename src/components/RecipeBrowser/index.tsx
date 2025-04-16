import Recipe from '../Recipe';
import './recipe-browser-styles.css'

import { useEffect, useState } from 'react'

import recipesJson from '../../data/recipes.json'

function RecipeBrowser() {
  const [recipeScale, setRecipeScale] = useState(65);
  const [recipeInfos, setRecipeInfos] = useState({});

  useEffect(() => {
    createRecipes();
  }, []);

  

  return (
    <div className='recipe-browser' style={{zoom: `${recipeScale}%`}}>
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
  )
}

async function createRecipes() {
  for (let i = 0; i < recipesJson.length; i++) {
    console.log(await getItemImageUrl(recipesJson[i].name));
  }
}

async function getItemImageUrl(itemName: string) {
  try {
    const response = await fetch( `/api?action=query&titles=File:${itemName.replace(' ', '_')}.png&prop=imageinfo&iiprop=url&format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const json = await response.json();
    return Object.values(json?.query?.pages)[0]?.imageinfo[0]?.url;

  } catch (error) {
    console.error(error);
  }
}

export default RecipeBrowser