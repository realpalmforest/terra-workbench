import './recipe-styles.css'

function Recipe() {
  return (
    <div className='recipe'>
      <img className='item' src='https://terraria.wiki.gg/images/9/9f/Ironskin_Potion.png?9f322c'/>
      <div className='right'>
        <h2 className='name'>Ironskin Potion</h2>
        <div className='ingredients'>
          <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/1/16/Bottled_Water.png?7d5a62'/>
          </div>
          <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/8/87/Iron_Ore.png?6192ca'/>
          </div>
          <div>
            <img className='item-small' src='https://terraria.wiki.gg/images/0/02/Daybloom.png?ba4cbf'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe
