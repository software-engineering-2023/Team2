import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const nav = useNavigate();

  const handleSearch = () => {
    // Perform search logic here

    // Redirect to a new page with the search query
    nav('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form>
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Enter your search query"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
