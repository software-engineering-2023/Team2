import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function ModalCCBills(props) {
    const [Amount, setAmount] = useState(0);
    const [amounttobepaiderror,setamounttobepaiderror]=useState(false);
    const [paid,setpaid]=useState(false);
   const handlePay = ()  => {
      const value = props.Amounttobepaid;
      if(Amount > value || Amount === 0)
      setamounttobepaiderror(true);
      else{ //props.setAmounttobepaid((value)-Amount);
        props.changeAmount(Amount);
        setpaid(true);

        if(Amount < value ) 
        props.setpaidpartially(true);
        else
        props.setpaidfully(true);

       // setTimeout(setpaid(false),1000)
      //setpaid(false);
      }
      
      

    }
    const onclose = () => {
      setpaid(false);
      props.onHide();

    }
   
   const handleChange = (e) => {
    setAmount(e.target.value)
      
       
    }
    const handleSubmit = () => {
        if(Amount && !amounttobepaiderror)
        props.onPay();
        
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
        {!paid && <Modal.Title id="contained-modal-title-vcenter">
         Select Payment Method
        </Modal.Title>}
        {paid && <Modal.Title id="contained-modal-title-vcenter">
         Payment Successful!
        </Modal.Title>}
      </Modal.Header>
      <Modal.Body>
      {paid? (
          <div>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p></p>
          </div>
        ) : (
        <div>
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
          <button className="p-blue bg btn btn-primary h8" onClick={()=>handlePay()}>Pay</button>
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
          <button className="p-blue bg btn btn-primary h8"onClick={()=>handlePay()}>Pay</button>
          </div>
        </div>
        <hr />
        {/* Payment method 3*/}
        <div className="d-flex align-items-center justify-content-between px-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-dollar-sign fa-3x"></i>
            <div className="ms-4 px-1">
              <div className="small">Account 28472889</div>
              
            </div>
          </div>
          <div className="ms-4 small">
          <button className="p-blue bg btn btn-primary h8"onClick={()=>handlePay()}>Pay</button>
          </div>
        </div>
      </div>
    </div>
    <input
              className={`form-control mb-3 ${!Amount ? 'border-red' : ''}`}
              type="text"
              placeholder="Amount to Pay"
              value={Amount}
              onChange={handleChange}
              required
            /> 
            {amounttobepaiderror && <p className="error-message">Please enter a correct value less than or equal the required .</p>}
            </div> ) }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>onclose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCCBills;