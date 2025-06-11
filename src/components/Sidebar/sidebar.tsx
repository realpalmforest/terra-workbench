import './sidebar-styles.css'
import { useState } from 'react'

import { FaCog } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { recipeData } from '../../App';
import RecipeDetails from '../RecipeDetails/recipe-details';

function Sidebar({ selectedRecipe }: { selectedRecipe: recipeData | undefined }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='sidebar'>
      {/* <div className='tab-container'>
        <button className={activeTab === 0 ? "tab-button tab-button-active" : 'tab-button'} onClick={() => setActiveTab(0)} >
          <FaBookOpen className='tab-icon'/>
          <span>Details</span>
        </button>
        <button className={activeTab === 1 ? "tab-button tab-button-active" : 'tab-button'} onClick={() => setActiveTab(1)} >
          <FaCalculator className='tab-icon'/>
          <span>Calculator</span>
        </button>
        <button className={activeTab === 2 ? "tab-button tab-button-active" : 'tab-button'} onClick={() => setActiveTab(2)} > 
          <FaCog className='tab-icon' />
          <span>Options</span>
        </button>
      </div> */}
      <div className='tab-content'>
        {activeTab === 0 && selectedRecipe && (
          <RecipeDetails selectedRecipe={selectedRecipe}/>
        )}
        {activeTab === 1 && (
          <div>
            <h3>Under construction</h3>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h3>Options</h3>
            <span>Cool setting</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar