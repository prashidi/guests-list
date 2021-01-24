const SearchForm = ({ keyword, setKeyword }) => {
  return (
    <form className='my-lg-3'>
      <input
        className='form-control mr-sm-3'
        type='search'
        placeholder='Filter'
        aria-label='Search'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
