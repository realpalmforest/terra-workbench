import { recipeDataType } from '../RecipeBrowser'
import './recipe-styles.css'

function Recipe({recipeData}: {recipeData: recipeDataType}) {
  return (
    <div className='recipe'>
      <img className='item' src={recipeData.url}/>
      <div className='right'>
        <h2 className='name'>{recipeData.recipeName}</h2>
        <div className='ingredients'>
          {
            recipeData.ingredientUrls.map((ingredient) => (
              <div>
                <img key={ingredient} className='item-small' src={ingredient}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Recipe
