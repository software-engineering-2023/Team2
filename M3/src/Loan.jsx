import React, { useState } from 'react';
import './form.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar';
import Second from './SecondNav';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const FormComponent = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [shownName, setShownName] = useState('');
  const [value, setValue] = useState()
  const [emailError, setEmailError] = useState(false); // Track email format error
  const stepList = ['Personal Information', 'Employment/Income', 'Financial Information', 'Loan Details'];
  const [accountNumber, setAccountNumber] = useState('');
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [monthlyExpensesError, setMonthlyExpensesError] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyIncomeError, setMonthlyIncomeError] = useState(false);
  const [accountBalance, setAccountBalance] = useState('');
  const [accountBalanceError, setAccountBalanceError] = useState(false);
  const [amountRequested, setAmountRequested] = useState('');
  const [amountRequestedError, setAmountRequestedError] = useState(false);
  const [LoanDuration, setLoanDuration] = useState('');
  const [LoanDurationError, setLoanDurationError] = useState(false);
  const [purpose, setpurpose] = useState('');
  const [purposeError, setpurposeError] = useState(false);





  const handleNextClick = () => {
    if (!validateForm()) {
      return;
    }
    setFormNumber((prevNumber) => prevNumber + 1);
  };

  const handlePurposeChange = (event) => {
    const value = event.target.value;
    const isValid = /^[A-Za-z]+$/.test(value); // Check if the value contains only digits from 1 to 9
    setpurpose(value);
    setpurposeError(!isValid);
  };

  const handleAmountRequestedChange = (event) => {
    const value = event.target.value;
    const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
    setAmountRequested(value);
    setAmountRequestedError(!isValid);
  };

  const handleBackClick = () => {
    setFormNumber((prevNumber) => prevNumber - 1);
  };

  const handleAccountBalanceChange = (event) => {
    const value = event.target.value;
    const isValid = /^[0-9]+$/.test(value); // Check if the value contains only digits from 1 to 9
    setAccountBalance(value);
    setAccountBalanceError(!isValid);
  };
  


  const handleMonthlyExpensesChange = (event) => {
    const value = event.target.value;
    const isValid = /^[1-9][0-9]*$/.test(value); // Check if the value contains only digits from 1 to 9
    setMonthlyExpenses(value);
    setMonthlyExpensesError(!isValid);
  };

  
  const handleMonthlyIncomeChange = (event) => {
    const value = event.target.value;
    const isValid = /^[1-9][0-9]*$/.test(value); // Check if the value contains only digits from 1 to 9
    setMonthlyIncome(value);
    setMonthlyIncomeError(!isValid);
  };
  


  const handleAccountNumberChange = (event) => {
    const value = event.target.value;
    const isValid = /^[1-9]{8}$/.test(value); // Check if the value is exactly 8 digits from 1 to 9
    setAccountNumber(value);
    setAccountNumberError(!isValid);
  };
  

  const handleSubmitClick = () => {
    if (!validateForm()) {
      return;
    }
    setShownName(document.querySelector('#user_name').value);
    setFormNumber((prevNumber) => prevNumber + 1);
  };

  const handleFocus = (event) => {
    event.target.removeAttribute('placeholder');
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      event.target.setAttribute('placeholder', event.target.getAttribute('data-example'));
    }
  };

  

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    if (!validateEmail(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const validateEmail = (email) => {
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
    return isValid && !emailError &&  !accountNumberError && !accountBalanceError && !monthlyExpensesError && !monthlyIncomeError && !LoanDuration ; // Check for email format error
  };

  return (
    <div>
    <Navbar></Navbar>
    <Second></Second>
    <div className="conta">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="left-heading">
              <h2>Personal Loan</h2>
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
                Enter your loan details.
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
                  <input type="text" required id="user_name" placeholder="e.g Jack"  onFocus={handleFocus} onBlur={handleBlur} data-example="e.g. Jack" />
                </div>
                <div className="input-div">
                <label>Last Name</label>
                  <input type="text" required placeholder="e.g Wilder" onFocus={handleFocus} onBlur={handleBlur} data-example="e.g Wilder"/>
                </div>
              </div>
              <div className="input-text">
              <div className="input-div">
                <div className="input-conto">
                    <label >E-mail Address</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. example@example.com"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-example="e.g. example@example.com"
                      onChange={handleEmailChange} // Add onChange event listener
                    />
                    {emailError && (
                      <p className="error-message">Please enter a valid email address.</p>
                    )}
                    </div>
                
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                <label >Address</label>
                  <input type="text" required placeholder="e.g 123 Main St" onFocus={handleFocus} onBlur={handleBlur} data-example="e.g 123 Main St"/>
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
                  <input type="text" required placeholder="e.g Company XYZ"/>
                </div>
                <div className="input-div">
                  <label>Monthly Income (USD)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g 20000"
                    value={monthlyIncome}
                    onChange={handleMonthlyIncomeChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-example="e.g 20000"
                  />
                  {monthlyIncomeError && (
                    <p className="error-message">Please enter a valid value.</p>
                  )}
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Job Title</label>
                  <input
                      type="text"
                      required
                      placeholder="e.g. Savings Account"
                      value={purpose}
                      onChange={handlePurposeChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-example="e.g. Savings Account"
                      
                    />
                    {purposeError && (
                        <p className="error-message">Please enter a word description</p>
                      )}
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
                  <input
                    type="text"
                    required
                    placeholder="e.g 12345678"
                    value={accountNumber}
                    onChange={handleAccountNumberChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-example="e.g 12345678"
                  />
                  {accountNumberError && (
                    <p className="error-message">Please enter a valid 8-digit account number.</p>
                  )}
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Account Balance (USD)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g 10000"
                    value={accountBalance}
                    onChange={handleAccountBalanceChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-example="e.g 10000"
                  />
                  {accountBalanceError && (
                    <p className="error-message">Please enter a valid value containing only digits from 0 to 9, excluding 0 as the first digit.</p>
                  )}
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <label>Monthly Expenses (USD)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g 7500"
                    value={monthlyExpenses}
                    onChange={handleMonthlyExpensesChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-example="e.g 7500"
                  />
                  {monthlyExpensesError && (
                    <p className="error-message">Please enter a valid value containing only digits from 0 to 9, excluding 0 as the first digit.</p>
                  )}
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
                <h2>Loan Details</h2>
                <h4>(7.5% Interest Rate)</h4>
              </div>
              <div className="input-text">
                  <div className="input-div">
                    <label>Amount Requested</label>
                    <input
                      type="text"
                      required
                      value={amountRequested}
                      onChange={handleAmountRequestedChange}
                    />
                    {amountRequestedError && (
                      <p className="error-message">Please enter a valid value containing only digits from 0 to 9, excluding 0 as the first digit.</p>
                    )}
                  </div>
                </div>
                <div className="input-text">
                  <div className="input-div">
                    <label>Loan Duration in Months</label>
                    <input
                      type="text"
                      required
                      value={amountRequested}
                      onChange={handleAmountRequestedChange}
                    />
                    {amountRequestedError && (
                      <p className="error-message">Please enter a valid value containing only digits from 0 to 9, excluding 0 as the first digit.</p>
                    )}
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
