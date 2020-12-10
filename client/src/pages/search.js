import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

  function saveBook(bookData) {
    console.log(bookData);
    let authors = bookData[1].join(', ');
    console.log(authors);
    bookData[1] = authors;

    API.saveBook({
        title: bookData[0],
        author: bookData[1],
        description: bookData[2],
        image: bookData[3],
        link: bookData[4]
    })
      .catch(err => console.log(err));
  };
    return (
    <div>
        Search Page
        <form>
            <Input style={{width: '90%'}}
             onChange={handleInputChange}
             name="query"
             placeholder="Enter Your Search"
             value={query}
            />
            <FormBtn onClick={handleFormSubmit}>
             Search
            </FormBtn>
        </form>
        {results.length ? (
              <div>
                {results.map(book => {
                  let bookData =    [book.volumeInfo.title,
                                     book.volumeInfo.authors,
                                     book.volumeInfo.description,
                                     book.volumeInfo.imageLinks.smallThumbnail,
                                     book.volumeInfo.infoLink];
                  return (
                    <Card key={bookData}>
                    <Card.Header>{book.volumeInfo.title}</Card.Header>
                      <Row>
                        <Col md='auto'>
                            <Card.Img style={{width: '60px'}} variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Text>By:  <i>{book.volumeInfo.authors}</i></Card.Text>
                                <Card.Text>{book.volumeInfo.description}</Card.Text>
                                <Button variant="primary" href = {book.volumeInfo.infoLink}>More Information</Button>
                                <Button variant="success" onClick={() => saveBook(bookData)}>Save To Reading List</Button>
                            </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>    
  );
}

export default Search;