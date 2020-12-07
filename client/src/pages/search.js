import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/form";

function Search() {
    const [query, setQuery] = useState('');

  function handleInputChange(event) {
      const { value } = event.target;
      setQuery(value);
  };

  function handleFormSubmit(event) {
    console.log(query);
    event.preventDefault();
    API.searchGoogleBooks(query)
    .then()
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
        </form>
    </div>    
  );
}

export default Search;