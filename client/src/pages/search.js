import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/form";

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');

  function handleInputChange(event) {
      const { value } = event.target;
      setQuery(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchGoogleBooks(query)
    .then(res => setResults(res.data.items))
  };

  function cl(event) {
    event.preventDefault();
    console.log(results);
  };
 

  return (
    <div>
        Search Page
        <form>
            <Input
             onChange={handleInputChange}
             name="query"
             placeholder="Enter Your Search"
             value={query}
            />
            <FormBtn onClick={handleFormSubmit}>
             Submit Book
            </FormBtn>
            <FormBtn onClick={cl}>
                console log resutls
            </FormBtn>
        </form>
    </div>    
  );
}

export default Search;