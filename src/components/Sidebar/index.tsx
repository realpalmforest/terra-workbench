import './sidebar-styles.css'
import { useState } from 'react'

import { FaCog } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='sidebar'>
      <div className='tab-container'>
        <button style={activeTab == 0 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(0)} >Details <FaBookOpen style={{paddingTop: "2px"}} /> </button>
        <button style={activeTab == 1 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(1)} >Calculator <FaCalculator style={{paddingTop: "2px"}} /></button>
        <button style={activeTab == 2 ? {backgroundColor: "var(--light-gray)"} : {}} onClick={() => setActiveTab(2)} >Options <FaCog style={{paddingTop: "2px"}} /> </button>
      </div>
      <div className='tab-content'>
        {activeTab === 0 && (
          <div>
            <h3>Details</h3>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h3>Under construction</h3>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h3>Under construction</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar