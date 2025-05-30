import { useEffect, useState } from 'react';
import { searchParams } from '../../App';
import './search-bar-styles.css';

import { FaCheck } from "react-icons/fa";
import { useCookies } from 'react-cookie';

function SearchBar({ paramsChanged }: { paramsChanged: (params: searchParams) => void }) {
  const [cookies, setCookie] = useCookies(['searchParams'])

  const [params, setParams] = useState<searchParams>({ query: "", searchIngredients: false, showAlternatives: false });
  
  // Load params from cookie
  useEffect(() => {
    const cookieValue = cookies.searchParams;
    if (cookieValue) {
      setParams(cookieValue);
    } else {
      setParams({ query: "", searchIngredients: false, showAlternatives: false });
    }
  }, []);

  // Save params to cookies
  useEffect(() => {
    const timeout = setTimeout(() => {
      paramsChanged(params);
    }, 400);

    if(params) {
      setCookie('searchParams', JSON.stringify({ ...params, query: ""}), {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      });
    }

    return () => clearTimeout(timeout);
  }, [params]);

  useEffect(() => {
    
  }, [params]);


  return (
    <div className='search-bar-container'>
      <input type='text' placeholder='Search...' value={params.query} onChange={(e) => {setParams({ ...params, query: e.target.value })}}/>
      
      <span>Search Ingredients</span>
      <button 
        className={params.searchIngredients ? "checkbox checkbox-checked" : "checkbox"} 
        onClick={() => {setParams({ ...params, searchIngredients: !params.searchIngredients })}}>
          <FaCheck className='checkmark-icon' />
      </button>

      <span>Show Alternatives</span>
      <button 
        className={params.showAlternatives ? "checkbox checkbox-checked" : "checkbox"} 
        onClick={() => {setParams({ ...params, showAlternatives: !params.showAlternatives })}}>
          <FaCheck className='checkmark-icon' />
      </button> 
    </div>
  )
}

export default SearchBar