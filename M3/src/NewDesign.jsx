import 'jquery/dist/jquery.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.css';
import './new.css'
import Navbar from "./Navbar";
import Second from "./SecondNav";
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';

const NewDesign = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [basicAccount, setBasicAccount] = useState('acc1');
    const [AccountNumber, setAccountNumber] = useState('');
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [amount, setAmount] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [amountRequestedError, setAmountRequestedError] = useState(false);
    const [accounterror, setaccounterror]=useState(false);
    const [recieveerror, setreceiveerror]=useState(false);

    const nav = useNavigate();

    const gotoBT = () => {
      nav("/bankaccounttransactions");
    }

    const handleAmountRequestedChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
      setReceiverAccountNumber(value);
      setAmount(!isValid);
    };

    const handleAccountNumberChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setAccountNumber(value);
      setaccounterror(!isValid);
    };

    const handleFocus = (event) => {
      event.target.removeAttribute('placeholder');
    };
  
    const handleBlur = (event) => {
      if (event.target.value === '') {
        event.target.setAttribute('placeholder', event.target.getAttribute('data-example'));
      }
    };

    const gotoOpen = () => {
      nav("/open");
    }

    const gotoClose = () => {
      nav("/close");
    }

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

    const handleBasicAccount = (value) => {
        if (value === basicAccount) {
          return;
        }
    
        setBasicAccount(value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all required fields are filled
        if (AccountNumber && receiverAccountNumber && recipientName && amount) {
          // Perform transfer logic here
          console.log('Transfer successful');
        } else {
          // Display error message or handle validation logic
          console.log('Please fill in all required fields');
          setSubmitted(true);
        }
      };

  return (
    <div className="bigboss">
        <Navbar></Navbar>
        <Second></Second>
    <div className="container">   
      <div className="row m-0">
        <div className="col-md-7 col-12">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="row box-right border">
                <div className="col-md-8 ps-0">
                <h1 className="fw-bold mb-3">Account Details</h1>
                <MDBTabs className='mb-3 flex-grow-1'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicAccount('acc1')} active={basicAccount === 'acc1'}>
            Account 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicAccount('acc2')} active={basicAccount === 'acc2'}>
            Account 2
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicAccount('acc3')} active={basicAccount === 'acc3'}>
            Account 3
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicAccount === 'acc1'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Account Balance
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    20,000 <span className="text-muted">.58</span>
                  </p>
                  <p className="ms-3 px-2 bg-green">+10% since last month</p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                    Account Number : <br></br>  9876543210
                  </p>
                  <p className="fw-bold mb-3">
                    IBAN: <br /> US12 1234 5678 9987 6543 210
                  </p>
                  <button onClick={gotoClose} className="p-blue bg btn btn-primary h8">Close Account</button>
                </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicAccount === 'acc2'}>
        <div className="col-md-8 ps-0">
                    
                    <p className="ps-3 text-muted fw-bold h6 mb-0">
                      Account Balance
                    </p>
                    <p className="h1 fw-bold d-flex">
                      <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                      84,254 <span className="text-muted">.58</span>
                    </p>
                    <p className="ms-3 px-2 bg-green">+10% since last month</p>
                  </div>
                  <div className="col-md-4">
                    <p className="fw-bold mb-3">
                      Account Number : <br></br>  746547564
                    </p>
                    <p className="fw-bold mb-3">
                      IBAN: <br /> US23 1234 6678 3347 2342
                    </p>
                    <button onClick={gotoClose} className="p-blue bg btn btn-primary h8">Close Account</button>

                  </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicAccount === 'acc3'}>
        <div className="col-md-8 ps-0">
                    
                    <p className="ps-3 text-muted fw-bold h6 mb-0">
                      Account Balance
                    </p>
                    <p className="h1 fw-bold d-flex">
                      <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                      120,254 <span className="text-muted">.58</span>
                    </p>
                    <p className="ms-3 px-2 bg-green">+10% since last month</p>
                  </div>
                  <div className="col-md-4">
                    <p className="fw-bold mb-3">
                      Account Number : <br></br>  2349823742
                    </p>
                    <p className="fw-bold mb-3">
                      IBAN: <br /> US43 2344 5678 9987 6543
                    </p>
                    <button onClick={gotoClose} className="p-blue bg btn btn-primary h8">Close Account</button>
                  </div>
        </MDBTabsPane>
      </MDBTabsContent>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="box-right border">
                <div className="d-flex pb-2">
                    <h1 className="fw-bold mb-3">Welcome to Financial Freedom</h1>
                </div>
                <div>
                  <p className="h8">
                  Experience the Power of a Bank Account Tailored for You
                  </p>
                  <button onClick ={gotoOpen} className="p-blue bg btn btn-primary h8">Open an Account</button>
                </div>
              </div>
            </div>
            <div className="col-12 px-0">
              <div className="box-right border">
                <div className="d-flex mb-2">
                  <h1 className="fw-bold">Your Accounts' Transactions</h1>
                </div>
                <div>
                    <p>Track and Manage Your Transactions with Ease</p>
                    <button onClick={gotoBT} className="p-blue bg btn btn-primary h8">View Your Transactions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 ps-md-5 p-0">
          <div className="box-left border d-flex flex-column">
            <h1 className="fw-bold mb-3 ">Transfers</h1>
            <MDBTabs className='mb-3 flex-grow-1'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Internal
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Domestic
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            International
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className="flex-grow-1">
      <MDBTabsPane show={basicActive === 'tab1'}>
          <form onSubmit={handleSubmit}>
          <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"y
              placeholder="Your Account Number"
              value={AccountNumber}
              onChange={handleAccountNumberChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              data-example='Your Account Number'
              required
            />
            {accounterror && (
                      <p className="error-message">Please enter an 8-digit valid Account Number</p>
            )}
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Recipient Account Number"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              data-example='Recipient Account Number'
              required
            />
            
            <input
              className={`form-control mb-3 ${submitted && !recipientName ? 'border-red' : ''}`}
              type="text"
              placeholder="Recipient Name"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              data-example='Recepient Name'
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !amount ? 'border-red' : ''}`}
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              data-example='Amount'
              required
            />
            <button
              className="btn btn-primary btn-block"
              onClick={() => setSubmitted(true)}
            >
              Make Transfer
            </button>
          </form>
        </MDBTabsPane>


        <MDBTabsPane show={basicActive === 'tab2'}>
        <form onSubmit={handleSubmit}>
        <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Your Account Number"
              value={AccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="IBAN"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !amount ? 'border-red' : ''}`}
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button
              className="btn btn-primary btn-block"
              onClick={() => setSubmitted(true)}
            >
              Make Transfer
            </button>
          </form>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
        <form onSubmit={handleSubmit}>
        <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Your Account Number"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="IBAN"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !amount ? 'border-red' : ''}`}
              type="text"
              placeholder="SWIFT"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !amount ? 'border-red' : ''}`}
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button
              className="btn btn-primary btn-block"
              onClick={() => setSubmitted(true)}
            >
              Make Transfer
            </button>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default NewDesign;
