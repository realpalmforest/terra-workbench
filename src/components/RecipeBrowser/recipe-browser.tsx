import Recipe from '../Recipe/recipe';
import './recipe-browser-styles.css'

import { useEffect, useState } from 'react'
import { recipeData, searchParams } from '../../App';

import recipesJson from '../../data/recipes_Vanilla.json'


function RecipeBrowser({ params, setSelectedRecipe }: { params: searchParams, setSelectedRecipe: (newRecipe: recipeData | undefined) => void }) {
  const [recipeDatas, setRecipeDatas] = useState<recipeData[]>(recipesJson as recipeData[]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(100);

  useEffect(() => {
    setPageNumber(0);
  }, [params]);

  return (
    <div className='recipe-browser'>
      <div className='recipes-container'>
        {applySearchParams().slice(pageSize * pageNumber, pageSize * (pageNumber + 1)).map(recipeData => (
          <Recipe key={recipeData.id} recipeData={recipeData} onClick={() => {
            setSelectedRecipe(recipeData)
          }} />
        ))}
      </div>

      <div className='recipes-page-selector'>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 0} >Previous</button>
        <span>Page {pageNumber + 1}</span>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={(pageNumber + 1) * pageSize >= applySearchParams().length} >Next</button>
      </div>
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