import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/form";

function Search() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
      query: ""
    })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    console.log(formObject.query);
    event.preventDefault();
    API.searchGoogleBooks(formObject.query)
    };
 

  return (
    <div>
        Search Page
        <form>
            <Input
             onChange={handleInputChange}
             name="query"
             placeholder="Enter Your Search"
             value={formObject.query}
            />
            <FormBtn onClick={handleFormSubmit}>
             Submit Book
            </FormBtn>
        </form>
    </div>    
  );
}

export default Search;