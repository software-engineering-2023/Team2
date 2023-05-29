import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import grumpyImage from './coins.jpg';
import { useState } from 'react';


function LoginForm() {

    const nav =useNavigate();
    const [loginError,setLoginError]= useState(false);

    

  const checkCredentials = (e) => {
    e.preventDefault();

    const data = {
      username: "amir.ashraf16502@gmail.com", // replace with your username
      password: "Doona213" // replace with your password
    };

    const emailInput = document.getElementById("form2Example17");
    const passwordInput = document.getElementById("form2Example27");

    if (emailInput.value === data.username && passwordInput.value === data.password) {
        nav("/home")
      // Add your logic for successful login here
    } else {
      setLoginError(true);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#fff' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={grumpyImage}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Hello</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="p-blue bg btn btn-primary h8" type="button" onClick={checkCredentials}>
                          Login
                        </button>
                        <p> </p>
                        {loginError && (
                      <p className="error-message">Invalid e-mail or password.</p>
                        )}  
                      </div>
                      
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don't have an account? <a href="/register" style={{ color: '#393f81' }}>Register here</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default LoginForm;

                 
