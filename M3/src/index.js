import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import LoginForm from './Login';
import Register from './Register';
import MultiStepForm from './Loan';
import Credit from './Credit';
import Open from './Open';
import CreditTrans from './CreditTrans';
import CreditCardPage from './CreditCardPage'
import Replacement from './Replacement';
import Account from './Account';
import BillingPage from './BillingPage';
import NotificationsPage from './Notifications';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/applyforpersonalloan" element={<MultiStepForm />} />
        <Route path="/applyforcredit" element={<Credit />} />
        <Route path="/open" element={<Open />} />
        <Route path="/creditcardtransactions" element={<CreditTrans />} />
        <Route path="/applyforreplacement" element={<Replacement />} />
        <Route path="/mycreditcards" element={<CreditCardPage />} />
        <Route path="/acc" element={<Account />} />
        <Route path="/mybills" element={<BillingPage />} />   
        <Route path="/notifications" element={<NotificationsPage />} />   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

