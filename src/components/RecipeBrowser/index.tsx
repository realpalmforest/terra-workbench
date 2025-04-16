import Recipe from '../Recipe';
import './recipe-browser-styles.css'

import { useEffect, useRef, useState } from 'react'

import recipesJson from '../../data/recipes.json'
import Slider from '../Slider';

export type recipeDataType = { recipeName: string, url: string | undefined, ingredientUrls: (string | undefined)[] }

function RecipeBrowser() {
  const [recipeScale, setRecipeScale] = useState<number>(65);
  const [recipeDatas, setRecipeDatas] = useState<recipeDataType[]>([]);
  const imgUrlsMapRef = useRef<Map<string, string>>(new Map<string, string>);

  useEffect(() => {
    createRecipes();
  }, []);

  async function createRecipes() {
    const initialDatas: recipeDataType[] = recipesJson.map(recipe => ({
      recipeName: recipe.name,
      url: undefined,
      ingredientUrls: []
    }));
    setRecipeDatas(initialDatas);
    console.log("initialDatas = ", initialDatas);


    for (let i = 0; i < recipesJson.length; i++) {
      const recipe = recipesJson[i];

      const url = await tryGetImageUrl(recipe.name);
      const ingredientUrls = [];

      for (let i = 0; i < recipe.ingredients.length; i++) {
        const ingredient = recipe.ingredients[i];
        ingredientUrls.push(await tryGetImageUrl(ingredient));
      }
      
      const recipeObject = initialDatas.find(data => data.recipeName === recipe.name) as recipeDataType;
      recipeObject.url = url;
      recipeObject.ingredientUrls = ingredientUrls;

      setRecipeDatas([...initialDatas]);
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
      {/* TODO: Fix slider or replace with number box
      <p>Scale</p>
      <Slider value={recipeScale} changeValue={setRecipeScale} /> */}

      <div className='recipe-browser' style={{zoom: `${recipeScale}%`}}>
        {
          recipeDatas.map(recipeData => (
            <Recipe key={recipeData.recipeName} recipeData={recipeData} />
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
    console.error("Couldn't get image url of item " + itemName, error);
  }
}

export default RecipeBrowser