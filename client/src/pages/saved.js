import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks() 
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Books On My List</h1>
      {books.length ? (
        <div>
          {books.map(book => {
          return (
          <Card>
           <Card.Header>{book.title}</Card.Header>
            <Row>
             <Col md='auto'>
              <Card.Img style={{width: '60px'}} variant="top" src={book.image} />
             </Col>
             <Col>
               <Card.Body>
                 <Card.Text>By:  <i>{book.author}</i></Card.Text>
                 <Card.Text>{book.description}</Card.Text>
                 <Button variant="primary" href = {book.infoLink}>More Information</Button>
               </Card.Body>
              </Col>
            </Row>
          </Card>
          );
         })} 
        </div>
      ) : (
        <h3> You need to save some books first!</h3>
      )}

    </div>    
  );
}

export default Saved;

  