import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import BankerNavbar from './BankerNavBar'

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigate();

  const handleSearch = () => {
    if (searchValue === '9471') {
      nav('/bankerclientinfo')
    } else {
      setErrorMessage('Invalid client id. Please try again with a valid client ID');
    }
  };

  return (
    <div className="dakhm">
      <BankerNavbar></BankerNavbar>
      <input type="text" 
      placeholder='Search By Client iD' className='fuck'
      onChange={(e) => setSearchValue(e.target.value)}
      />
      <p> </p>
      <button onClick={handleSearch} className="p-blue bg btn btn-primary h8 khosh">
        Search
      </button>
      {errorMessage && (
                      <p className="error-message2">Invalid Client ID. Please try again with a valid client ID</p>
                    )}
      </div>
  );
};

export default SearchPage;
