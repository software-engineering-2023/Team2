import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './billing.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SecondNav from './SecondNav';
import Navbar from "./Navbar";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import AddPayment from "./AddPayment";
const BillingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalshowadd,setModalShowAdd] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [carddone,setcarddone]=React.useState(false);
  const [accdone,setaccdone]=React.useState(false);
  const [reminder,setreminder]=React.useState(false);
  const setcarddone2=( value)=>{
setcarddone(true);
  }
  const setaccdone2=( value)=>{
    setaccdone(value);
      }
  const onPay= () => {
//setModalShow(false);
//alert("Payment Successful");
  }
  const handleReminderClick = () =>{
    setreminder(true);
  }
    return (
      
        <div className="baba">
            <Navbar></Navbar>
            <SecondNav></SecondNav>
        <div className="container-xl px-4 mt-4">
    <hr className="mt-0 mb-4" />
    <div className="row">
      <div className="col-lg-4 mb-4">
        {/* Billing card 1*/}
        <div className="card h-100 border-start-lg border-start-primary">
          <div className="card-body">
            <div className="small text-muted">Remaining monthly bills' value</div>
            {!paymentSuccess && <div className="h1">$29.99</div>}
            {paymentSuccess && <div className="h1">$0.00</div>}
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        {/* Billing card 2*/}
        <div className="card h-100 border-start-lg border-start-secondary">
          <div className="card-body">
            <div className="small text-muted">Next payment due</div>
            {!paymentSuccess && <div className="h1">June 15</div>}
            {paymentSuccess && <div className="h1">None</div>}
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        {/* Billing card 3*/}
        <div className="card h-100 border-start-lg border-start-success">
          <div className="card-body">
            <div className="small text-muted">Number of Bills Remaining to be paid</div>
            {!paymentSuccess && <div className="h1 d-flex align-items-center">1</div>}
            {paymentSuccess && <div className="h1 d-flex align-items-center">0</div>}
          </div>
        </div>
      </div>
    </div>
    {/* Payment methods card*/}
    <div className="card card-header-actions mb-4">
      <div className="card-header">
        Payment Methods
        <td><button className="p-blue bg btn btn-primary h8" onClick={() => setModalShowAdd(true)}>Add Payment Method</button></td>
                <AddPayment show={modalshowadd} onHide={() => setModalShowAdd(false)} onPay={onPay} carddone={carddone}
                setcarddone={setcarddone2} accdone={accdone} setaccdone={setaccdone} />
      </div>
      <div className="card-body px-0">
        {/* Payment method 1*/}
        <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-cc-visa fa-2x cc-color-visa" />
            <div className="ms-4">
              <div className="small">Visa ending in 1234</div>
              <div className="text-xs text-muted">Expires 04/2024</div>
            </div>
          </div>
          
        </div>
        <hr />
        {/* Payment method 2*/}
        <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard" />
            <div className="ms-4">
              <div className="small">Mastercard ending in 5678</div>
              <div className="text-xs text-muted">Expires 05/2022</div>
            </div>
          </div>
          
        </div>
        <hr />
        {/* Payment method 3*/}
        <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
          <i className="fas fa-dollar-sign fa-3x"></i>
            <div className="ms-4 px-1">
              <div className="small">Account: 21434892</div>
              
            </div>
          </div>
        </div>
      </div>
      {accdone && <hr />}
      {accdone &&
      
         <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
          <i className="fas fa-dollar-sign fa-3x"></i>
            <div className="ms-4 px-1">
              <div className="small">Account: 21434892</div>
              
            </div>
          </div>
          
        </div>
        
        
        
        }
         {carddone && <hr />}
      {carddone && 
      
      <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard" />
            <div className="ms-4">
              <div className="small">Mastercard ending in 5678</div>
              <div className="text-xs text-muted">Expires 05/2022</div>
            </div>
          </div>
          
          </div>
          

          
          }
      
     
    </div>
    {/* Billing history card*/}
    <div className="card mb-4">
      <div className="card-header">Billing</div>
      <div className="card-body p-0">
        {/* Billing history table*/}
        <div className="table-responsive table-billing-history">
          <table className="table mb-0">
            <thead>
              <tr>
                <th className="border-gray-200" scope="col">
                  Bill ID
                </th>
                <th className="border-gray-200" scope="col">
                  Bill Type
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
                  Pay
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#39201</td>
                <td>Water</td>
                <td>06/15/2021</td>
                <td>$29.99</td>
                <td>
                {!paymentSuccess&&<span className="badge bg-light text-dark">Unpaid</span>}
                {paymentSuccess&&<span className="badge bg-success">Paid</span>}
                </td>
                {reminder && <td><p >Reminder Set!</p></td>}
                {!reminder && !paymentSuccess &&<td><button className="p-blue bg btn btn-primary h8" onClick={()=>handleReminderClick()}>Set Reminder</button></td>}
                {!paymentSuccess&&<td><button className="p-blue bg btn btn-primary h8" onClick={() => setModalShow(true)}>Pay</button></td>}

                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} onPay={onPay} paymentSuccess={paymentSuccess}
                setPaymentSuccess={setPaymentSuccess}/>
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
                  {<span className="badge bg-success">Paid</span>}
                </td>
              </tr>
              <tr>
                <td>#38125</td>
                <td>Telephone</td>
                <td>03/15/2021</td>
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
    )
}

export default BillingPage;