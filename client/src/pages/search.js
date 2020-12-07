import React, { useState } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
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
        {results.length ? (
              <List>
                {results.map(book => {
                  return (
                    <ListItem key={book._id}>
                        <strong>
                          {book.volumeInfo.title}
                        </strong>
                          {book.volumeInfo.authors}
                          {book.volumeInfo.description}
                          {book.volumeInfo.imageLinks.smallThumbnail}
                          {book.volumeInfo.infoLink}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

    </div>    
  );
}

export default Search;