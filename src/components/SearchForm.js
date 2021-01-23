import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    onSearch(keyword);
  };
  return (
    <form className='my-lg-3'>
      <input
        className='form-control mr-sm-3'
        type='search'
        placeholder='Filter'
        aria-label='Search'
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
