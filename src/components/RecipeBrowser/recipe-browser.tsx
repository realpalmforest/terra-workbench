import Recipe from '../Recipe/recipe';
import './recipe-browser-styles.scss'

import { useEffect, useRef, useState } from 'react'
import { recipeData, searchParams } from '../../App';

import recipesJson from '../../data/recipes_Vanilla.json'

function RecipeBrowser({ params, setSelectedRecipe }: { params: searchParams, setSelectedRecipe: (newRecipe: recipeData | undefined) => void }) {
  const [recipeDatas] = useState<recipeData[]>(recipesJson as recipeData[]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize] = useState<number>(100);
  const browserRef = useRef<HTMLDivElement | null>(null);

  // Reset to page 1 when search params change
  useEffect(() => { 
    setPageNumber(0);
    resetScroll();
  }, [params]);

  // Scroll to the top when the page is changes
  useEffect(() => {
    resetScroll();
  }, [pageNumber]);

  return (
    <div className='recipe-browser'>
      <div className='recipes-container' ref={browserRef} >
        {applySearchParams().slice(pageSize * pageNumber, pageSize * (pageNumber + 1)).map(recipeData => (
          <Recipe key={recipeData.id} recipeData={recipeData} onClick={() => {
            setSelectedRecipe(recipeData)
          }} />
        ))}
      </div>

      <div className='page-selector'>
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

  function resetScroll() {
    if(browserRef.current && browserRef.current.firstChild) {
      (browserRef.current.firstChild as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export default RecipeBrowser