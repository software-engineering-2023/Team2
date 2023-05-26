import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './banker.css';
import { useNavigate } from 'react-router-dom';

function BankerLogin() {

    const nav =useNavigate();

    const handleSignin = () => {
        const data = {
          username: "amir.ashraf16502@gmail.com", // replace with your username
          password: "Doona213" // replace with your password
        };
        const emailInput = document.getElementById("formControl1");
    const passwordInput = document.getElementById("formControl2");

    if (emailInput.value === data.username && passwordInput.value === data.password) {
        nav("/bankerHome")
      // Add your logic for successful login here
    } else {
      alert("Invalid username or password");
      // Add your logic for invalid credentials here
    }
  };

  return (
    
    
    <MDBContainer fluid className="p-3 my-5" >

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControl1' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControl2' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            
           
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSignin}>Sign in</MDBBtn>

 

        </MDBCol>

      </MDBRow>

    </MDBContainer>

  
  );
}

export default BankerLogin;