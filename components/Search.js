import React, { useState } from 'react';
import '../styles/Search.css';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetSearchField = () => {
        setSearchValue("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetSearchField();

    }
    return (
      <form>
        <input
          type="text"
          value={searchValue}
          placeholder="Search Movies"
          onChange={handleSearchChanges}
          className="searchInput"
        />
        <input type="submit" value="SEARCH" onClick={handleSubmit} className="searchBtn"/>
        <p>
          {" "}
          Relieving your stress through Entertainment{" "}
        </p>
      </form>
    );

}
export default Search;