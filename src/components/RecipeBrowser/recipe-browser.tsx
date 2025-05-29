import Recipe from '../Recipe/recipe';
import './recipe-browser-styles.css'

import { useEffect, useRef, useState } from 'react'

import recipesJson from '../../data/recipes.json'

import { recipeData, item, searchParams } from '../../App';


function RecipeBrowser({ params, setSelectedRecipe }: { params: searchParams, setSelectedRecipe: (newRecipe: recipeData | undefined) => void }) {
  const [recipeDatas, setRecipeDatas] = useState<recipeData[]>([]);
  const imgUrlsMapRef = useRef<Map<string, string>>(new Map<string, string>);

  useEffect(() => {
      createRecipes();  
  }, []);

  async function createRecipes() {
    const initialDatas: recipeData[] = recipesJson.map(recipe => ({
      result: {
        name: recipe.result.name,
        quantity: 0,
        imageUrl: undefined
      },
      ingredients: []
    }));
    setRecipeDatas(initialDatas);


    for (let i = 0; i < recipesJson.length; i++) {
      const recipe = recipesJson[i];

      const saved = localStorage.getItem("recipes") as string;
      let savedRecipe;
      if(saved) {
        savedRecipe = (JSON.parse(saved) as recipeData[]).find(rec => rec.result.name == recipe.result.name);
      }
      
      const recipeObject: recipeData = initialDatas.find(data => data.result.name === recipe.result.name) as recipeData;
      
      // If this recipe is saved, load from localStorage
      if(saved && savedRecipe) {
        recipeObject.result = savedRecipe.result;
        recipeObject.ingredients = savedRecipe.ingredients;
        setRecipeDatas([...initialDatas]);
        continue;
      }


      const result: item = {
        name: recipe.result.name,
        quantity: recipe.result.quantity,
        imageUrl: await tryGetImageUrl(recipe.result.name)
      };

      const ingredients: item[] = [];

      // Loop through all ingredients and get image urls
      for (let i = 0; i < recipe.ingredients.length; i++) {
        const ingredient = recipe.ingredients[i];

        ingredients.push({
          name: ingredient.name,
          quantity: ingredient.quantity,
          imageUrl: await tryGetImageUrl(ingredient.name)
        });
      }
      
      recipeObject.result = result;
      recipeObject.ingredients = ingredients;

      setRecipeDatas([...initialDatas]);
      
      // If no recipes are saved, save only this one
      if(!saved) {
        localStorage.setItem("recipes", JSON.stringify([ recipeObject ]));
      // Otherwise if this one is not saved yet, save it.
      } else if (!savedRecipe){
        localStorage.setItem("recipes", JSON.stringify([...JSON.parse(saved), recipeObject]))
      }
    }
  }

  async function tryGetImageUrl(name: string) {
    if (!imgUrlsMapRef.current.has(name)) {
      const url = await getItemImageUrl(name);
      imgUrlsMapRef.current.set(name, url);
    }

    return imgUrlsMapRef.current.get(name);
  }
  

  return (
    <>
      <div className='recipe-browser'>
        {
          recipeDatas.filter((data) => {
            if(params.query.trim() === "") {
              return true;
            }

            if(data.result.name.toLocaleLowerCase().includes(params.query.toLocaleLowerCase().trim())) {
              return true;
            }

            if(params.ingredients) {
              for (let i = 0; i < data.ingredients.length; i++) {
                const ingredient = data.ingredients[i];
              
                if(ingredient.name.toLocaleLowerCase().includes(params.query.toLocaleLowerCase().trim())) {
                  return true;
                }
              }
            }

            return false;
          }).map(recipeData => (
            <Recipe key={recipeData.result.name} recipeData={recipeData} onClick={() => {
              setSelectedRecipe(recipeData)
            }} />
          ))
        }
      </div>
    </>
  )
}


async function getItemImageUrl(itemName: string) {
  try {
    const response = await fetch( `/api?action=query&titles=File:${itemName.replace(' ', '_')}.png&prop=imageinfo&iiprop=url&format=json`);

    const json = await response.json();
    return Object.values(json?.query?.pages)[0]?.imageinfo[0]?.url;

  } catch (error) {
    console.error(`Couldn't get image url of item "${itemName}"`, error);
  }
}

export default RecipeBrowser