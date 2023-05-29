import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaExclamationTriangle } from "react-icons/fa";

const WarningModal = (props) => {
    const handleClose = () => {
        // setPaymentSuccess(false);
         props.setyes(false);
         props.onHide();
       };
       
     
    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <div>
      {!props.yes &&<FaExclamationTriangle
        size={32} // Customize the size of the icon (in pixels)
        style={{ color: 'orange' }} // Customize the color of the icon
      />}
    </div>
      {!props.yes&&<p>Are you Sure?</p>}
      {props.yes && <p>Transferred!</p>}
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.yes ? (
          <div>
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p></p>
            
          </div>
        ) : (  
      <p>Are you sure you trust this receiver and you want the transfer to go through?</p>)}
      </Modal.Body>
      <Modal.Footer>
        {!props.yes&&<Button onClick={()=>props.handleYes()}>Yes</Button>}
        {!props.yes&&<Button onClick={handleClose}>No</Button>}
        {props.yes && <Button onClick={handleClose}>Close</Button>}
      </Modal.Footer>
    </Modal>
    );
}
export default WarningModal;