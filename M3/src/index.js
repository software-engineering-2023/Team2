import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Redirect} from 'react-router-dom'
import { Routes , Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import LoginForm from './Login';
import Register from './Register';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

