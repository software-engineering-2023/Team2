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
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [date,setDate]=useState('');
    const [CVV,setCVV]=useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleBasicClick = (value) => {
        if (value === basicActive) {
          return;
        }
    
        setBasicActive(value);
      };
  
      
      const handleSubmit = (e) => {
          e.preventDefault();
      
          // Check if all required fields are filled
          if (receiverAccountNumber && AccountNumber) {
            // Perform transfer logic here
            console.log('Transfer successful');
          } else {
            // Display error message or handle validation logic
            console.log('Please fill in all required fields');
            setSubmitted(true);
          }
        };

        const finished = () => {
            setSubmitted(true);
            if(submitted && receiverAccountNumber && AccountNumber)
            props.onHide();
        };
        const cardFinished = () => {
            setSubmitted(true);
            if(submitted && receiverAccountNumber && AccountNumber && date && CVV)
            props.onHide();
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
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Account Holder Name"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
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
              value={AccountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-3 ${submitted && !receiverAccountNumber ? 'border-red' : ''}`}
              type="text"
              placeholder="Credit Card Holder Name"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            <input
              className={`form-control mb-2 ${submitted && !date ? 'border-red' : ''}`}
              type="text"
              placeholder="Expiry date: MM/YY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
              <input
              className={`form-control mb-2 ${submitted && !CVV ? 'border-red' : ''}`}
              type="text"
              placeholder="CVV (3-digit-number on the back)"
              value={CVV}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
    </Modal>
    );
    
};
export default AddPayment;