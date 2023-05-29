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
  import Modal from 'react-bootstrap/Modal';
  import Button from 'react-bootstrap/Button';


const AddPayment = (props) => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [AccountNumber, setAccountNumber] = useState('');
    const [accounterror, setaccounterror]=useState(false);
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [CardNumber,setCardNumber]=useState('');
    const [CardNumberError,setCardNumberError]=useState(false);
    const[CCHolderName,setCCHolderName]=useState('');
    const [date,setDate]=useState('');
    const [dateError,setdateError]=useState(false);
    const [CVV,setCVV]=useState('');
    const [CVVError,setCVVError]=useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleAccountNumberChange = (event) => {
      const value = event.target.value;
      const isValid = /^[0-9]{8}$/.test(value); // Check if the value contains only digits from 1 to 9
      setAccountNumber(value);
      setaccounterror(!isValid);
    };
    const handleCardNumberChange = (event) => {
      const value = event.target.value;
      const isValid = /^\d{16}$/.test(value); // Check if the value contains only digits from 1 to 9
      setCardNumber(value);
      setCardNumberError(!isValid);
    };
    const handleDateChange = (event) => {
      const value = event.target.value;
      const isValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(value); // Check if the value contains only digits from 1 to 9
      setDate(value);
      setdateError(!isValid);
    };
    const handleCVVChange = (event) => {
      const value = event.target.value;
      const isValid = /^\d{3}$/.test(value); // Check if the value contains only digits from 1 to 9
      setCVV(value);
      setCVVError(!isValid);
    };
    const handleBasicClick = (value) => {
        if (value === basicActive) {
          return;
        }
    
        setBasicActive(value);
      };
  
      
      const handleSubmit = (e) => {
          e.preventDefault();
          setSubmitted(true);
          // Check if all required fields are filled
          if (receiverAccountNumber && AccountNumber) {
            // Perform transfer logic here
            console.log('Transfer successful');
          } else {
            // Display error message or handle validation logic
            console.log('Please fill in all required fields');
           
          }
        };

        const finished = () => {
            setSubmitted(true);
            if( receiverAccountNumber && AccountNumber  && !accounterror)
            {//props.onHide();
              setaccdone2(true);
            props.setaccdone(true);
          }
        };
        const finished2 = () => {
          setSubmitted(true);
          if(receiverAccountNumber && AccountNumber  && !accounterror)
          {//props.onHide();s
            
          props.setaccdone(true);}
      };
        const cardFinished = () => {
            setSubmitted(true);
            if(CardNumber && date && CCHolderName && CVV && !CardNumberError && !dateError && !CVVError)
            {//props.onHide();
              setcarddone2(true);
            props.setcarddone(true);}
        };

        const handleFocus = (event) => {
          event.target.removeAttribute('placeholder');
        };
      
        const handleBlur = (event) => {
          if (event.target.value === '') {
            event.target.setAttribute('placeholder', event.target.getAttribute('data-example'));
          }
          
          }
          const [accdone2,setaccdone2]=useState(false);
          const [carddone2,setcarddone2]=useState(false);
          
          const onclose=()=>{
            props.onHide();
            if(props.accdone)
            {setaccdone2(false);
            }
            else
            {setcarddone2(false);
            }
        };
    return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Add Payment Method
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {accdone2 || carddone2 ? (
          <div>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p></p>
          </div>
        ) :(
      <div className="col-md-5 col-12 ps-md-5 p-0">
          <div className="box-left border d-flex flex-column">
            
            <MDBTabs className='mb-3 flex-grow-1'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
           Bank Account
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Credit Card
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className="flex-grow-1">
      <MDBTabsPane show={basicActive === 'tab1'}>
          <form onSubmit={handleSubmit}>
          <input
              className={`form-control mb-3 ${submitted && !AccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Your Account Number"
              value={AccountNumber}
              onChange={handleAccountNumberChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = 'Your Account Number'
              required
            />
            {accounterror && <p className="error-message">Please enter a valid 8-digit number.</p>}
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Account Holder Name"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = 'Account Holder Name'
              required
              
            />
          
            <button
              className="btn btn-primary btn-block"
              onClick={() => finished()}
            >
              Add Payment Method
            </button>
          </form>
        </MDBTabsPane>


        <MDBTabsPane show={basicActive === 'tab2'}>
        <form onSubmit={handleSubmit}>
        <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Card Number"
              value={CardNumber}
              onChange={handleCardNumberChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = 'e.g 1234123412341234'
              required
            />
            {CardNumberError && <p className="error-message">Please enter you 16-digit card number.</p>}
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Credit Card Holder Name"
              value={CCHolderName}
              onChange={(e) => setCCHolderName(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = 'e.g JOHN DOE'
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !date ? 'border-red' : ''}`}
              type="text"
              placeholder="Expiry date: MM/YY"
              value={date}
              onChange={handleDateChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = ' e.g 05/20'
              required
            />
            {dateError && <p className="error-message">Please enter date in this format MM/YY.</p>}
              <input
              className={`form-control mb-2 ${submitted && !CVV ? 'border-red' : ''}`}
              type="text"
              placeholder="CVV (3-digit-number on the back)"
              value={CVV}
              onChange={handleCVVChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              data-example = 'e.g 145'
              required
            />
            {CVVError && <p className="error-message">Please enter a 3-digit number.</p>}
            <button
              className="btn btn-primary btn-block"
              onClick={() => cardFinished()}
            >
              Add Payment Method
            </button>
          </form>
        </MDBTabsPane>
       
      </MDBTabsContent>
          </div>
        </div>)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
           onclose()
        }}>Close</Button>
        
      </Modal.Footer>
    </Modal>
    );
    
};
export default AddPayment;