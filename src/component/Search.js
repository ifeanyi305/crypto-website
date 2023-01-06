import React from 'react';

// eslint-disable-next-line
const Search = ({ onSearch }) => {
  return (
    <>
      <div className="input">
        <input type="search" onChange={onSearch} placeholder="Search exchange" />
      </div>
    </>

  );
};

export default Search;
