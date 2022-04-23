import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <span className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit} data-testid="searchbutton">
        Search
      </button>
    </span>
  );
}

export default SearchForm;
