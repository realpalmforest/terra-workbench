import './recipe-details-styles.css';

import { recipeData } from '../../App';

function RecipeDetails({ selectedRecipe }: { selectedRecipe: recipeData }) {
  return (
    <div className='recipe-details-view'>
      <h2>{selectedRecipe.result.name}</h2>
      <img src={`items/${selectedRecipe.result.name}.png`} className='result-item-image'/>

      <h3>Crafting Stations</h3>
      <div>
        <span>Under construction</span>
      </div>

      <h3>Ingredients</h3>
      <div>
        <span>Under construction</span>
      </div>
    </div>
  )
}

export default RecipeDetails