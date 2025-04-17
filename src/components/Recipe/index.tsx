import { recipeData } from '../RecipeBrowser'
import './recipe-styles.css'

function Recipe({recipeData}: {recipeData: recipeData}) {
  return (
    <div className='recipe'>
      <div style={{display: "flex"}}>
        <img className='item-image' src={recipeData.result.imageUrl ?? './src/assets/undefined.gif'}/>
        <p className='quantity-label'>{recipeData.result.quantity > 1 ? recipeData.result.quantity : ""}</p>
      </div>
      <div className='right-container'>
        <h2 className='name'>{recipeData.result.name}</h2>
        <div className='ingredients-container'>
          {
            recipeData.ingredients.map((ingredient) => (
              <div style={{display: "flex"}} key={`${recipeData.result.name}.${recipeData.ingredients.indexOf(ingredient)}`} >
                <img className='ingredient-image' src={ingredient.imageUrl ?? './src/assets/undefined.gif'}/>
                <p className='quantity-label'>{ingredient.quantity > 1 ? ingredient.quantity : ""}</p>
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