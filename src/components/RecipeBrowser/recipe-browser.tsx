import Recipe from '../Recipe/recipe';
import './recipe-browser-styles.css'

import { useEffect, useState } from 'react'
import { recipeData, item, searchParams } from '../../App';

import recipesJson from '../../data/recipes.json'


function RecipeBrowser({ params, setSelectedRecipe }: { params: searchParams, setSelectedRecipe: (newRecipe: recipeData | undefined) => void }) {
  const [recipeDatas, setRecipeDatas] = useState<recipeData[]>([]);

  useEffect(() => {
      createRecipes();  
  }, []);

  async function createRecipes() {
    const initialDatas: recipeData[] = recipesJson.map(recipe => ({
      result: {
        name: recipe.result.name,
        quantity: 0
      },
      ingredients: [],
      id: recipe.id
    }));

    setRecipeDatas(initialDatas);


    for (let i = 0; i < recipesJson.length; i++) {
      const recipeData = recipesJson[i];
      const recipe = initialDatas.find(data => data.id === recipeData.id) as recipeData;

      const result: item = {
        name: recipeData.result.name,
        quantity: recipeData.result.quantity,
      };

      const ingredients = [];

      // Loop through all ingredients and get image urls
      for (let i = 0; i < recipeData.ingredients.length; i++) {
        const ingredient = recipeData.ingredients[i];

        ingredients.push({
          name: ingredient.name,
          quantity: ingredient.quantity,
        });
      }
      
      recipe.result = result;
      recipe.ingredients = ingredients;

      setRecipeDatas([...initialDatas]);
    }
  }
  
  function applySearchParams() {
    return recipeDatas.filter((data, index) => {
            if(!params.showAlternatives && index > 0 && data.result.name == recipeDatas[index - 1].result.name) {
              return false;
            }

            if(params.query.trim() === "") {
              return true;
            }

            if(data.result.name.toLocaleLowerCase().includes(params.query.toLocaleLowerCase().trim())) {
              return true;
            }

            if(params.searchIngredients) {
              for (let i = 0; i < data.ingredients.length; i++) {
                const ingredient = data.ingredients[i];
              
                if(ingredient.name.toLocaleLowerCase().includes(params.query.toLocaleLowerCase().trim())) {
                  return true;
                }
              }
            }

            return false;
          })
  }

  return (
    <div className='recipe-browser'>
      {
        applySearchParams().map(recipeData => (
          <Recipe key={recipeData.id} recipeData={recipeData} onClick={() => {
            setSelectedRecipe(recipeData)
          }} />
        ))
      }
    </div>
  )
}


export default RecipeBrowser