import './sidebar-styles.css'
import { useState } from 'react'

import { FaCog } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { recipeData } from '../RecipeBrowser/recipe-browser';

function Sidebar({ selectedRecipe }: { selectedRecipe: recipeData | undefined }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='sidebar'>
      <div className='tab-container'>
        <button className='tab-button' style={activeTab == 0 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(0)} >
          <FaBookOpen className='tab-icon'/>
          <p>Details</p>
        </button>
        <button className='tab-button' style={activeTab == 1 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(1)} >
          <FaCalculator className='tab-icon'/>
          <p>Calculator</p>
        </button>
        <button className='tab-button' style={activeTab == 2 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(2)} > 
          <FaCog className='tab-icon' />
          <p>Options</p>
        </button>
      </div>
      <div className='tab-content'>
        {activeTab === 0 && selectedRecipe && (
          <div>
            <h3>{selectedRecipe.result.name}</h3>
            <img src={`/items/${selectedRecipe.result.name}.png`} />
            <p>Some funny info goes here</p>
          </div>
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