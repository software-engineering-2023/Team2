import React, { useState } from "react";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
const CreditCardReports = () => {
  const [submitted, setSubmitted] = useState(false);
  const [issueDescription, setIssueDescription] = useState("");
const nav=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the issue description is empty
    if (issueDescription.trim() === "") {
      return;
    }

    // Perform any necessary form submission logic

    // Set the submitted state to true
    setSubmitted(true);
  };
  const gotoCreditRep = () => {
    nav('/applyforreplacement')
  }



  return (
    <div className="issues">
      <Navbar />
      <Second />
      <h1 className="message">Please Tell Us How We Can Help Today</h1>
      {!submitted ? (
        <div className="textbox">
          <form onSubmit={handleSubmit}>
            <textarea
              className="enlarged-textbox"
              placeholder="Tell us wether you lost, theft or damage and wether you want us to freeze your card."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              required
            ></textarea>
            <button className="submit" type="submit">
              Submit.
            </button>
            
          </form>
        </div>
      ) : (
        <div className="submission-message">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h2 className="title-rep">Thank you !</h2>
          <p className="right-rep">Your report has been submitted successfully.</p>
          <button className="submit" onClick={gotoCreditRep}>Apply for Credit Card Replacement</button>
        </div>
      )}
    </div>
  );
};

export default CreditCardReports;
