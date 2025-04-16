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

          {/* <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png?7d5a62'/>
          </div>
          <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/8/87/Iron_Ore.png?6192ca'/>
          </div>
          <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/0/02/Daybloom.png?ba4cbf'/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Recipe
