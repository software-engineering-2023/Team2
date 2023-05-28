import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function ModalCCBills(props) {
    const [Amount, setAmount] = useState('');
   
    const handleSubmit = () => {
        if(!Amount)
        
        alert('Payment not Successful');
        

        else{
        props.onPay();
        alert('Payment Successful');
        }
        // Check if all required fields are filled
        
      };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Select Payment Method
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            {/* Payment methods card*/}
    <div className="card card-header-actions mb-4">
      <div className="card-header">
        Payment Methods
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
          <button className ="btn btn-sm add-reminder" onClick={()=>handleSubmit()}>Pay</button>
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
          <button className ="btn btn-sm add-reminder"onClick={()=>handleSubmit()}>Pay</button>
          </div>
        </div>
        <hr />
        {/* Payment method 3*/}
        <div className="d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center">
            
            <div className="ms-4">
              <div className="small">Bank Account 1</div>
              
            </div>
          </div>
          <div className="ms-4 small">
          <button className ="btn btn-sm add-reminder"onClick={()=>handleSubmit()}>Pay</button>
          </div>
        </div>
      </div>
    </div>
    <input
              className={`form-control mb-3 ${!Amount ? 'border-red' : ''}`}
              type="text"
              placeholder="Amount to Pay"
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCCBills;