import { recipeData } from '../../App';
import './recipe-styles.css'

function Recipe({recipeData, onClick}: {recipeData: recipeData, onClick: () => void}) {
  return (
    <div className='recipe' onClick={() => { onClick() }}>

      <div className='left-recipe-side' style={{display: "flex"}}>
        <img className='item-image' src={`/items/${recipeData.result.name}.png`} title={recipeData.result.name} onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = 'images/undefined.gif'
        }}/>
        <span className='quantity-label'>{recipeData.result.quantity > 1 ? recipeData.result.quantity : ""}</span>
      </div>

      <div className='right-recipe-side'>
        <h2 className='name'>{recipeData.result.name}</h2>
        <div className='ingredients-container'>
          {
            recipeData.ingredients.map((ingredient) => (
              <div style={{display: "flex"}} key={`${recipeData.result.name}.ingredient${recipeData.ingredients.indexOf(ingredient)}`} >
                <img className='ingredient-image' src={`/items/${ingredient.name}.png`} title={ingredient.name} onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = 'images/undefined.gif'
                }}/>
                <span className='quantity-label'>{ingredient.quantity > 1 ? ingredient.quantity : ""}</span>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Recipe

// function getIngredientQuantityString(ingredientImageUrl: string) {
//   const split = ingredientImageUrl.split(" ");

//   if(parseInt(split[split.length - 1]) > 1)
//     return split[split.length - 1];
//   else return "";
// }