import 'jquery/dist/jquery.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.css';
import './new.css'
import Navbar from "./Navbar";
import Second from "./SecondNav";
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CardDesign from './CardDesign';
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
    const [accounterror, setaccounterror]=useState(false);
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [recieveerror, setreceiveerror]=useState(false);
    const [recipientName, setRecipientName] = useState('');
    const [amount, setAmount] = useState('');
    const [amountRequestedError, setAmountRequestedError] = useState(false);
    const [basicCard, setBasicCard] = useState('card1');



    const handleBasicCard = (value) => {
        if (value === basicCard) {
          return;
        }
    
        setBasicCard(value);
      };
    
    const [AccountNumberdom, setAccountNumberdom] = useState('');
    const [accounterrordom, setaccounterrordom]=useState(false);
    const [receiverAccountNumberdom, setReceiverAccountNumberdom] = useState('');
    const [recieveerrordom, setreceiveerrordom]=useState(false);
    const [recipientNamedom, setRecipientNamedom] = useState('');
    const [amountdom, setAmountdom] = useState('');
    const [amountRequestedErrordom, setAmountRequestedErrordom] = useState(false);

    const [AccountNumberint, setAccountNumberint] = useState('');
    const [accounterrorint, setaccounterrorint]=useState(false);
    const [receiverAccountNumberint, setReceiverAccountNumberint] = useState('');
    const [recieveerrorint, setreceiveerrorint]=useState(false);
    const[swift,setswift]=useState('');
    const[swifterror,setswifterror]=useState(false);
    const [amountint, setAmountint] = useState('');
    const [amountRequestedErrorint, setAmountRequestedErrorint] = useState(false);

    const [submitted, setSubmitted] = useState(false);
    
    
    

    const nav = useNavigate();

    const gotoBT = () => {
      nav("/bankaccounttransactions");
    }
    const handleAccountNumberChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setAccountNumber(value);
      setaccounterror(!isValid);
    };
    const handleReceiverAccountNumberChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setReceiverAccountNumber(value);
      setreceiveerror(!isValid);
    };
    const handleAmountRequestedChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
      setAmount(value);
      setAmountRequestedError(!isValid);
    };

    const handleAccountNumberChangedom = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setAccountNumberdom(value);
      setaccounterrordom(!isValid);
    };
    const handleReceiverAccountNumberChangedom = (event) => {
      const value = event.target.value;
      const isValid = /^[A-Za-z]{2}\d{18}$/.test(value);
 // Check if the value contains only digits from 1 to 9
      setReceiverAccountNumberdom(value);
      setreceiveerrordom(!isValid);
    };
    const handleAmountRequestedChangedom = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
      setAmountdom(value);
      setAmountRequestedErrordom(!isValid);
    };
    const handleAccountNumberChangeint = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setAccountNumberint(value);
      setaccounterrorint(!isValid);
    };

const handleReceiverAccountNumberChangeint = (event) => {
      const value = event.target.value;
      const isValid = /^[A-Za-z]{2}\d{18}$/.test(value);
 // Check if the value contains only digits from 1 to 9
      setReceiverAccountNumberint(value);
      setreceiveerrorint(!isValid);
    };
    const handleSWIFT = (event) => {
      const value = event.target.value;
      const isValid = /^[A-Za-z]{6}[A-Za-z0-9]{2}$/.test(value);
 // Check if the value contains only digits from 1 to 9
      setswift(value);
      setswifterror(!isValid);
    }

    const handleAmountRequestedChangeint = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
      setAmountint(value);
      setAmountRequestedErrorint(!isValid);
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

    const gotoPbt = () => {
      nav("/clientbank");
    }

    const gotoProto = () => {
      nav("/clientcredit");
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
                <h1 className="fw-bold mb-3">Client Details</h1>
                    <p className="h5 fw-bold d-flex">
                      Yassin Yasser Fayed
                    </p>
                    <p className="h5 fw-bold d-flex">ID: 9471</p>
                    <p className="h5 fw-bold d-flex">E-mail Address: yassin_fayed@hotmail.com</p>
                    <p className="h5 fw-bold d-flex">National ID: 46192382010291</p>
                </div>
              </div>
            </div>
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
                  </div>
        </MDBTabsPane>
      </MDBTabsContent>
                </div>
              </div>
            </div>
            <div className="col-12 px-0">
              <div className="box-right border">
                <div className="d-flex mb-2">
                  <h1 className="fw-bold">Client's Bank Account Transactions</h1>
                </div>
                <div>
                    <button onClick={gotoPbt} className="p-blue bg btn btn-primary h8">View Transactions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 ps-md-5 p-0">
          <div className="box-left border d-flex flex-column">
            <h1 className="fw-bold mb-3 ">Card Details</h1>
            <MDBTabs className='mb-3 flex-grow-1'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicCard('card1')} active={basicCard === 'card1'}>
            Card 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicCard('card2')} active={basicCard === 'card2'}>
            Card 2
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicCard('card3')} active={basicCard === 'card3'}>
            Card 3
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicCard === 'card1'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Card Balance
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    7,965 <span className="text-muted">.23</span>
                    
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                  <CardDesign cvc="***" expiry="12/24" name="John Doe" number="4111 1111 1111 1111"></CardDesign>
                  <p>  </p>
                  <p>Credit Limit : 20,000</p>
                  <p> </p>
                  <p>Current Points : 4000</p>
                  </p>

                </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicCard === 'card2'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Card Balance
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    15,000 <span className="text-muted">.98</span>
                    
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                  <CardDesign  cvc="***" expiry="12/25" name="Y. Fayed" number="5555 5678 9012 3456"></CardDesign>
                  <p>  </p>
                  <p>Credit Limit : 40,000</p>
                  <p> </p>
                  <p>Current Points : 7237</p>
                  </p>

                </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicCard === 'card3'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Card Balance
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    65,232 <span className="text-muted">.45</span>
                    
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                  <CardDesign  cvc="***" expiry="08/26" name="Y. Yasser" number="3782 822463 10005"></CardDesign>
                  <p>  </p>
                  <p>Credit Limit : 70,000</p>
                  <p> </p>
                  <p>Current Points : 2300</p>
                  </p>

                </div>
        </MDBTabsPane>
      </MDBTabsContent>
          </div>
          <div className="box-left border mt-4">
                <div className="d-flex flex-column">
                    <h1 className="fw-bold mb-3">Client's Credit Card Transactions</h1>
                    <div>
                        <button onClick={gotoProto}className="p-blue bg btn btn-primary h8">View Transactions</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default NewDesign;
