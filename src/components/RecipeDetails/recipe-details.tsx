import './recipe-details-styles.css';

import { recipeData } from '../../App';
import ItemListElement from '../ItemListElement/item-list-element';

function RecipeDetails({ selectedRecipe }: { selectedRecipe: recipeData }) {
  return (
    <div className='recipe-details-view'>
      <h2>{selectedRecipe.result.name}</h2>
      <img src={`items/${selectedRecipe.result.name}.png`} className='result-item-image'/>
      <span className='item-tooltip'>Tooltip</span>

      <div className='workstation-container'>
        {selectedRecipe.ingredients.map(workstation=> (
          <img src={`items/${workstation.name}.png`} className='workstation-image' />
        ))}
      </div>

      <h3>Ingredients</h3>
      <div className='item-container'>
        {selectedRecipe.ingredients.map(ingredient => (
          <ItemListElement itemData={ingredient} key={ingredient.name}/>
        ))}
      </div>
    </div>
  )
}

export default RecipeDetails