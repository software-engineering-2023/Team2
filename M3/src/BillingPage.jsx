import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './billing.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SecondNav from './SecondNav';
import Navbar from "./Navbar";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
const BillingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const onPay= () => {
setModalShow(false);
alert("Payment Successful");
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
            <div className="h1">$20.00</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        {/* Billing card 2*/}
        <div className="card h-100 border-start-lg border-start-secondary">
          <div className="card-body">
            <div className="small text-muted">Next payment due</div>
            <div className="h1">June 15</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        {/* Billing card 3*/}
        <div className="card h-100 border-start-lg border-start-success">
          <div className="card-body">
            <div className="small text-muted">Number of Bills Remaining to be paid</div>
            <div className="h1 d-flex align-items-center">4</div>
          </div>
        </div>
      </div>
    </div>
    {/* Payment methods card*/}
    <div className="card card-header-actions mb-4">
      <div className="card-header">
        Payment Methods
        <button className="btn btn-sm add-payment" type="button">
          Add Payment Method
        </button>
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
          <div className="ms-4 small">
          <button className ="btn btn-sm add-reminder">Remove</button>
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
          <div className="ms-4 small">
          <button className ="btn btn-sm add-reminder">Remove</button>
          </div>
        </div>
        <hr />
        {/* Payment method 3*/}
        <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-cc-amex fa-2x cc-color-amex" />
            <div className="ms-4">
              <div className="small">American Express ending in 9012</div>
              <div className="text-xs text-muted">Expires 01/2026</div>
            </div>
          </div>
          <div className="ms-4 small">
          <button className ="btn btn-sm add-reminder">Remove</button>
          </div>
        </div>
      </div>
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
                  <span className="badge bg-light text-dark">Unpaid</span>
                </td>
                <td><button className ="btn btn-sm add-reminder" onclick="handleReminderClick()">Set Reminder</button></td>
                <td><button className ="btn btn-sm add-reminder" onClick={() => setModalShow(true)}>Pay</button></td>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} onPay={onPay}/>
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