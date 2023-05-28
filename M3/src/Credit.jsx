import React, { useState } from 'react';
import './form.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar';
import SecondNav from "./SecondNav"

const FormComponent = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [shownName, setShownName] = useState('');
  const stepList = ['Personal Information', 'Employment/Income', 'Financial Information', 'Credit History'];

  const handleNextClick = () => {
    if (!validateForm()) {
      return;
    }
    setFormNumber((prevNumber) => prevNumber + 1);
  };

  const handleBackClick = () => {
    setFormNumber((prevNumber) => prevNumber - 1);
  };

  const handleSubmitClick = () => {
    if (!validateForm()) {
        return;
      }
    setShownName(document.querySelector('#user_name').value);
    setFormNumber((prevNumber) => prevNumber + 1);
  };

  const handleHeartClick = () => {
    const heartIcon = document.querySelector('.fa-heart');
    heartIcon.classList.toggle('heart');
  };

  const handleShareClick = () => {
    const shareIcon = document.querySelector('.fa-share-alt');
    shareIcon.classList.toggle('share');
  };

  const validateForm = () => {
    let isValid = true;
    const validateInputs = document.querySelectorAll('.main.active input');
    validateInputs.forEach((validateInput) => {
      validateInput.classList.remove('warning');
      if (validateInput.hasAttribute('required')) {
        if (validateInput.value.length === 0) {
          isValid = false;
          validateInput.classList.add('warning');
        }
      }
    });
    return isValid;
  };

  return (
    <div>
    <Navbar></Navbar>
    <SecondNav></SecondNav>
    <div className="conta">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="left-heading">
              <h2>Credit Card</h2>
            </div>
            <div className="steps-content">
              <h3>
                Step <span className="step-number">{formNumber + 1}</span>
              </h3>
              <p className={`step-number-content ${formNumber === 0 ? 'active' : 'd-none'}`}>
                Enter your personal information.
              </p>
              <p className={`step-number-content ${formNumber === 1 ? 'active' : 'd-none'}`}>
                Enter your employment/income details.
              </p>
              <p className={`step-number-content ${formNumber === 2 ? 'active' : 'd-none'}`}>
                Enter your financial information.
              </p>
              <p className={`step-number-content ${formNumber === 3 ? 'active' : 'd-none'}`}>
                Enter your credit history details.
              </p>
            </div>
            <ul className="progress-bar">
              {stepList.map((step, index) => (
                <li key={index} className={index === formNumber ? 'active' : ''}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="right-side">
            <div className={`main ${formNumber === 0 ? 'active' : ''}`}>

              <div className="text">
                <h2>Personal Information</h2>
              </div>
              <div className="input-text">
                <div className="input-div">
                    <label htmlFor="user_name">First Name</label>
                  <input type="text" required id="user_name" />
                </div>
                <div className="input-div">
                <label>Last Name</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                <label>Phone number</label>
                  <input type="text" required />
                  
                </div>
                <div className="input-div">
                    <label >E-mail Address</label>
                  <input type="text" required />
                
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                <label>Select Country</label>
                  <select>
                    <option>India</option>
                    <option>France</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Russia</option>
                    <option>China</option>
                    <option>Japan</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="input-div">
                <label>Select City</label>
                  <select>
                    <option>New Delhi</option>
                    <option>Paris</option>
                    <option>London</option>
                    <option>Washington D.C.</option>
                    <option>Berlin</option>
                    <option>Moscow</option>
                    <option>Bejing</option>
                    <option>Tokyo</option>
                    <option>Islamabad</option>
                  </select>
                </div>
              </div>
              <div className="buttons">
                <button className="next_button" onClick={handleNextClick}>
                  Next Step
                </button>
              </div>
            </div>
            <div className={`main ${formNumber === 1 ? 'active' : ''}`}>
              <div className="text">
                <h2>Employment and Income</h2>
              </div>
              <div className="input-text">
                <div className="input-div">
                    <label>Current Employer</label>
                  <input type="text" required />
                </div>
                <div className="input-div">
                  <label>Monthly Income</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Length of employment with current employer</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Job Title</label>
                  <select>
                    <option>Select a Job Title</option>
                    <option>Junior Employee</option>
                    <option>Senior Employee</option>
                    <option>Manager</option>
                    <option>Part-time</option>
                    <option>Executive</option>
                  </select>
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button" onClick={handleBackClick}>
                  Back
                </button>
                <button className="next_button" onClick={handleNextClick}>
                  Next Step
                </button>
              </div>
            </div>
            <div className={`main ${formNumber === 2 ? 'active' : ''}`}>
              <div className="text">
                <h2>Financial Information</h2>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Account Number</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div"> 
                  <label>Account Balance</label> 
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Monthly Expenses</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button" onClick={handleBackClick}>
                  Back
                </button>
                <button className="next_button" onClick={handleNextClick}>
                  Next Step
                </button>
              </div>
            </div>
            <div className={`main ${formNumber === 3 ? 'active' : ''}`}>
              <div className="text">
                <h2>Credit History</h2>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Details regarding existing loans or credit cards</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div"> 
                  <label>Credit utilization</label> 
                  <input type="text" required />
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Debts or late payments (if any)</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button" onClick={handleBackClick}>
                  Back
                </button>
                <button className="submit_button" onClick={handleSubmitClick}>
                  Submit
                </button>
              </div>
            </div>
            <div className={`main ${formNumber === 4 ? 'active' : ''}`}>
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
              <h2 className='title'>Thank you {shownName}!</h2>
              <p className='right'>Your form has been submitted successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormComponent;
