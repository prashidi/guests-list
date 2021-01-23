import React from "react";

const SearchForm = () => {
  return (
    <form className='my-lg-2'>
      <input
        className='form-control mr-sm-'
        type='search'
        placeholder='Filter'
        aria-label='Search'
      />
    </form>
  );
};

export default SearchForm;
