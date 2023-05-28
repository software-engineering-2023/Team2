import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true);
    props.onPay();
  };

  const handleClose = () => {
    setPaymentSuccess(false);
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Select Payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {paymentSuccess ? (
          <div>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p>Payment Successful!</p>
          </div>
        ) : (
          <div className="card card-header-actions mb-4">
            <div className="card-header">Payment Methods</div>
            <div className="card-body px-0">
              {/* Payment methods */}
              <div className="d-flex align-items-center justify-content-between px-4">
                <div className="d-flex align-items-center">
                  <i className="fab fa-cc-visa fa-2x cc-color-visa" />
                  <div className="ms-4">
                    <div className="small">Visa ending in 1234</div>
                    <div className="text-xs text-muted">Expires 04/2024</div>
                  </div>
                </div>
                <div className="ms-4 small">
                  <button className="p-blue bg btn btn-primary h8" onClick={handlePayment}>
                    Pay
                  </button>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between px-4">
                <div className="d-flex align-items-center">
                  <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard" />
                  <div className="ms-4">
                    <div className="small">Mastercard ending in 5678</div>
                    <div className="text-xs text-muted">Expires 05/2022</div>
                  </div>
                </div>
                <div className="ms-4 small">
                  <button className="p-blue bg btn btn-primary h8">Pay</button>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between px-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-dollar-sign fa-3x"></i>
                  <div className="ms-4 px-1">
                    <div className="small">Account: 28472889</div>
                  </div>
                </div>
                <div className="ms-4 small">
                  <button className="p-blue bg btn btn-primary h8">Pay</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!paymentSuccess && <Button onClick={handleClose}>Close</Button>}
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
