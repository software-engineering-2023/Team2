import 'jquery/dist/jquery.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.css';
import './new.css'
import Navbar from "./Navbar";
import Second from "./SecondNav";
import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import CardDesign from './CardDesign';

const NewCreditCard = () => {

    const [basicCard, setBasicCard] = useState('card1');
    const [submitted, setSubmitted] = useState(false);



    const handleBasicCard = (value) => {
        if (value === basicCard) {
          return;
        }
    
        setBasicCard(value);
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
                <h1 className="fw-bold mb-3">Card Details</h1>
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
                  <CardDesign cvc="123" expiry="12/24" name="John Doe" number="4111 1111 1111 1111"></CardDesign>
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
                  <CardDesign  cvc="756" expiry="12/25" name="Y. Fayed" number="5555 5678 9012 3456"></CardDesign>
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
                  <CardDesign  cvc="7912" expiry="08/26" name="Y. Yasser" number="3782 822463 10005"></CardDesign>
                  <p>  </p>
                  <p>Credit Limit : 70,000</p>
                  <p> </p>
                  <p>Current Points : 2300</p>
                  <button className="p-blue bg btn btn-primary h8">Redeem Points for 10% Cashback</button>
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
                    <h1 className="fw-bold mb-3">Your Cards' Bills</h1>
                </div>
                <div>
                <div className="table-responsive table-billing-history">
          <table className="table mb-0">
            <thead>
              <tr>
                <th className="border-gray-200" scope="col">
                  Loan Number
                </th>
                <th className="border-gray-200" scope="col">
                  Bill Name
                </th>
                <th className="border-gray-200" scope="col">
                  Date
                </th>
                <th className="border-gray-200" scope="col">
                  Amount
                </th>
                <th className="border-gray-200" scope="col">
                  Status
                </th>
                <th className="border-gray-200" scope="col">
                  Reminders
                </th>
                <th className="border-gray-200" scope="col">
                  Reminders
                </th>
                <th className="border-gray-200" scope="col">
                  Reminders
                </th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#39201</td>
                <td>Water</td>
                <td>06/15/2021</td>
                <td>$29.99</td>
                <td>$29.99</td>
                <td>$29.99</td>
                <td>
                  <span className="badge bg-light text-dark">Pending</span>
                </td>
                <td><button className ="btn btn-sm add-reminder" onclick="handleReminderClick()">Set Reminder</button></td>
              </tr>
              <tr>
                <td>#38594</td>
                <td>Gas</td>
                <td>05/15/2021</td>
                <td>$29.99</td>
                <td>
                  <span className="badge bg-light text-dark">Pending</span>
                </td>
                <td>05/14/2021</td>
              </tr>
              <tr>
                <td>#38223</td>
                <td>Electricity</td>
                <td>04/15/2021</td>
                <td>$29.99</td>
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
            <h1 className="fw-bold mb-3 ">Experience Convenience</h1>
                    <div>
                  <p className="h8">
                  Embrace the Rewards and Convenience of Credit Cards Today!
                  </p>
                  <p className="p-blue bg btn btn-primary h8">Apply for a Credit Card</p>
            </div>
          </div>
           <div className="box-left border mt-4">
                <div className="d-flex flex-column">
                    <h1 className="fw-bold mb-3">Protect Your Finances</h1>
                    <div>
                        <p className="h8">
                        Stay One Step Ahead and Report Card Theft, Loss or Damage Now!
                        </p>
                        <p className="p-blue bg btn btn-primary h8">Report</p>
                    </div>
                </div>
            </div>
            <div className="box-left border mt-4">
                <div className="d-flex flex-column">
                    <h1 className="fw-bold mb-3">Get Back on Track!</h1>
                    <div>
                        <p className="h8">
                        Ensure uninterrupted access to your funds!
                        </p>
                        <p className="p-blue bg btn btn-primary h8">Apply for Credit Card Replacement</p>
                    </div>
                </div>
            </div>
            <div className="box-left border mt-4">
                <div className="d-flex flex-column">
                    <h1 className="fw-bold mb-3">Your Cards' Transactions</h1>
                    <div>
                        <p className="h8">
                        Track and Manage Your Transactions with Ease
                        </p>
                        <p className="p-blue bg btn btn-primary h8">View Transactions</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default NewCreditCard;
