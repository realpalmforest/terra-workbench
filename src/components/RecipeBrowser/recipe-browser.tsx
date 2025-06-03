import Recipe from '../Recipe/recipe';
import './recipe-browser-styles.css'

import { useState } from 'react'
import { recipeData, searchParams } from '../../App';

import recipesJson from '../../data/recipes.json'


function RecipeBrowser({ params, setSelectedRecipe }: { params: searchParams, setSelectedRecipe: (newRecipe: recipeData | undefined) => void }) {
  const [recipeDatas, setRecipeDatas] = useState<recipeData[]>(recipesJson as recipeData[]);

  return (
    <div className='recipe-browser'>
      {applySearchParams().map(recipeData => (
        <Recipe key={recipeData.id} recipeData={recipeData} onClick={() => {
          setSelectedRecipe(recipeData)
        }} />
      ))}
    </div>
  )

  function applySearchParams() {
    const query = params.query.toLowerCase().trim();

    return recipeDatas.filter((data, index) => {
      if(!params.showAlternatives && index > 0 && data.result.name == recipeDatas[index - 1].result.name) {
        return false;
      }

      if(params.query.trim() === "") {
        return true;
      }

      if(data.result.name.toLowerCase().includes(query)) {
        return true;
      }

      if(params.searchIngredients) {
        for (let i = 0; i < data.ingredients.length; i++) {
          const ingredient = data.ingredients[i];
              
          if(ingredient.name.toLowerCase().includes(query)) {
            return true;
          }
        }
      }

      return false;
    });
  }
}

export default RecipeBrowser