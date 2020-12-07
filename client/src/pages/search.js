import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/form";

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleFormSubmit(event) {
    event.preventDefault();
    };
 

  return (
    <div>
        Search Page
        <form>
              <Input
                name="title"
                placeholder="Title"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
    </div>    
  );
}

export default Search;