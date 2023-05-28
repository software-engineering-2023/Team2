import 'jquery/dist/jquery.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.css';
import './new.css'
import Navbar from "./Navbar";
import Second from "./SecondNav";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';

const NewLoan = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const [basicLoan,setBasicLoan] = useState ('loan1')
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [amount, setAmount] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const nav = useNavigate();


    const gotoApply = () => {
      nav("/applyforpersonalloan");
    }

    const gotoCar = () => {
      nav("/applyforcar");
    }

    const handleBasicLoan = (value) => {
        if (value === basicLoan) {
          return;
        }
    
        setBasicLoan(value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all required fields are filled
        if (receiverAccountNumber && recipientName && amount) {
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
                    
                <h1 className="fw-bold mb-3">Loan Details</h1>
                <MDBTabs className='mb-3 flex-grow-1'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicLoan('loan1')} active={basicLoan === 'loan1'}>
            Loan 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicLoan('loan2')} active={basicLoan === 'loan2'}>
            Loan 2
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicLoan('loan3')} active={basicLoan === 'loan3'}>
            Loan 3
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicLoan === 'loan1'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Loan Amount
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    1,000,000 <span className="text-muted">.00</span>
                  </p>
                  <p className="ms-3 px-2 bg-green">5% Interest Rate</p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                    Loan Number : <br></br>  234423
                  </p>
                  <p className="fw-bold mb-3">
                    Type : <br /> Car Loan
                  </p>
                  <p className="fw-bold mb-3">
                    Car Model : <br /> BMW 2022
                  </p>
                </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicLoan === 'loan2'}>
        <div className="col-md-8 ps-0">
                    
                  <p className="ps-3 text-muted fw-bold h6 mb-0">
                    Loan Amount
                  </p>
                  <p className="h1 fw-bold d-flex">
                    <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                    369,000 <span className="text-muted">.00</span>
                  </p>
                  <p className="ms-3 px-2 bg-green">3.25% Interest Rate</p>
                </div>
                <div className="col-md-4">
                  <p className="fw-bold mb-3">
                    Loan Number : <br></br>  93534
                  </p>
                  <p className="fw-bold mb-3">
                    Type : <br /> Personal Loan
                  </p>
                </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicLoan === 'loan3'}>
        <div className="col-md-8 ps-0">
                    
                    <p className="ps-3 text-muted fw-bold h6 mb-0">
                      Loan Amount
                    </p>
                    <p className="h1 fw-bold d-flex">
                      <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1" />
                      90,254 <span className="text-muted">.58</span>
                    </p>
                    <p className="ms-3 px-2 bg-green">9.5 Interest Rate</p>
                  </div>
                  <div className="col-md-4">
                    <p className="fw-bold mb-3">
                      Loan Number : <br></br>  23492
                    </p>
                    <p className="fw-bold mb-3">
                    Type : <br /> Car Loan
                  </p>
                  <p className="fw-bold mb-3">
                    Car Model : <br /> Mercedes Benz 2021
                  </p>
                  </div>
        </MDBTabsPane>
      </MDBTabsContent>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="box-right border">
                <div className="d-flex pb-2">
                    <h1 className="fw-bold mb-3">Your Loans' Bills</h1>
                </div>
                <div>
                <div className="table-responsive table-billing-history">
          <table className="table mb-0">
            <thead>
              <tr>
                <th className="border-gray-200" scope="col">
                  Bill ID
                </th>
                <th className="border-gray-200" scope="col">
                  Loan Number
                </th>
                <th className="border-gray-200" scope="col">
                  Due Date
                </th>
                <th className="border-gray-200" scope="col">
                  Amount
                </th>
                <th className="border-gray-200" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#39201</td>
                <td>1924768</td>
                <td>06/15/2023</td>
                <td>$20000</td>
                <td>
                  <span className="badge bg-light text-dark">Pending</span>
                </td>

              </tr>
              <tr>
                <td>#38594</td>
                <td>1230918</td>
                <td>05/30/2023</td>
                <td>$15000</td>
                <td>
                  <span className="badge bg-light text-dark">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#38223</td>
                <td>7834123</td>
                <td>06/30/2023</td>
                <td>$7500</td>
                <td>
                  <span className="badge bg-success">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 ps-md-5 p-0">
          <div className="box-left border d-flex flex-column">
            <h1 className="fw-bold mb-3 ">Unlock Your Dreams with Our Flexible Loan Options</h1>
            <div>
                  <p className="h8">
                  Accelerate Towards Your Dream Car with Us!
                  </p>
                  <button onClick ={gotoCar} className="p-blue bg btn btn-primary h8">Apply for a Car Loan</button>
                  <p> </p>
            </div>
            <div>
                  <p className="h8">
                  Seize Opportunities and Achieve Your Aspirations with Our Personal Loan Options!
                  </p>
                  <button onClick={gotoApply} className="p-blue bg btn btn-primary h8">Apply for a Personal Loan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default NewLoan;
