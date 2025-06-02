import './item-list-element-styles.css';

import { itemData } from '../../App';

function ItemListElement({ itemData }: { itemData: itemData }) {
  return (
    <div className='list-element-container' title={itemData.name}>
      <img src={`items/${itemData.name}.png`}/>
      <span className='ingredient-name'>{itemData.name}</span>
      <span>x{itemData.quantity}</span>
    </div>
  )
}

export default ItemListElement