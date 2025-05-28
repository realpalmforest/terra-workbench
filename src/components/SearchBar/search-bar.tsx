import { useState } from 'react';
import { searchParams } from '../../App';
import './search-bar-styles.css';


function SearchBar({ paramsChanged }: { paramsChanged: (params: searchParams) => void }) {
  const [params, setParams] = useState<searchParams>({ query: "", ingredients: false});
  
  return (
    <div className='search-bar-container'>
      <input type='text' placeholder='Search...' value={params.query} onChange={(e) => setParams({ ...params, query: e.target.value })}/>
      <button onClick={() => paramsChanged(params)}>Search</button>
    </div>
  )
}

export default SearchBar