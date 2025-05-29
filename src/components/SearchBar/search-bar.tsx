import { useEffect, useState } from 'react';
import { searchParams } from '../../App';
import './search-bar-styles.css';

import { FaCheck } from "react-icons/fa";

function SearchBar({ paramsChanged }: { paramsChanged: (params: searchParams) => void }) {
  const [params, setParams] = useState<searchParams>({ query: "", ingredients: false});
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      paramsChanged(params);
    }, 300);

    return () => clearTimeout(timeout);
  }, [params]);

  return (
    <div className='search-bar-container'>
      <input type='text' placeholder='Search...' value={params.query} onChange={(e) => {setParams({ ...params, query: e.target.value })}}/>
      
      <span>Search Ingredients</span>

      <button 
        className={params.ingredients ? "checkbox checkbox-checked" : "checkbox"} 
        onClick={() => {setParams({ ...params, ingredients: !params.ingredients })}}>
          <FaCheck className='checkmark-icon' /></button>   
    </div>
  )
}

export default SearchBar