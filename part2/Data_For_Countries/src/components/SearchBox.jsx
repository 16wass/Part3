import React from 'react';

const SearchBox = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      find countries : <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBox;
