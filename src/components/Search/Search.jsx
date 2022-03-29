import React from 'react';
import FilterContext from '../../contexts/FilterContext';
import {useContext} from "react";

const Search = () => {
    const {filter, handleChange} = useContext(FilterContext); 
    return (
        <div id="search">
            <input type="search" value={filter} onChange={handleChange} />
        </div>
  );
}

export default Search;