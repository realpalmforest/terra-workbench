import { useEffect, useState } from 'react';
import { searchParams } from '../../App';
import './search-bar-styles.css';


function SearchBar({ paramsChanged }: { paramsChanged: (params: searchParams) => void }) {
  const [params, setParams] = useState<searchParams>({ query: "", ingredients: false});
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      paramsChanged(params);
    }, 300);

    return () => clearTimeout(timeout);
  }, [params.query]);

  return (
    <div className='search-bar-container'>
      <input type='text' placeholder='Search...' value={params.query} 
        onChange={(e) => {setParams({ ...params, query: e.target.value })}}
        // onKeyDown={(e) => {
        //   if(e.key === "Enter") {
        //     paramsChanged(params);
        //   }
        // }}
        />
      {/* <button onClick={() => paramsChanged(params)}>Search</button> */}
    </div>
  )
}

export default SearchBar