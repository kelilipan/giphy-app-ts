import * as React from 'react'

interface SearchBoxProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement> 
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  query: string
}

const SearchBox = ({ handleSubmit, handleChange, query }:SearchBoxProps)  => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
