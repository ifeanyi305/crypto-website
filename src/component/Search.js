import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ onSearch }) => {
  const header = 'Search exchange';
  return (
    <>
      <div className="input">
        <h1 className="input-header">{header}</h1>
        <input type="search" onChange={onSearch} placeholder="Search exchange" />
      </div>
    </>

  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;

export default Search;
