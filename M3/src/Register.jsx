import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [nationalId, setNationalId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [errors, setErrors] = useState({
    nationalId: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    terms: ''
  });


  const nav = useNavigate();

  const handleRegister = () => {
    const nationalIdPattern = /^\d{14}$/;

    // Reset previous errors
    setErrors({
      nationalId: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountNumber: '',
      terms: ''
    });

    if (
      nationalId &&
      email &&
      password &&
      confirmPassword &&
      accountNumber &&
      termsChecked
    ) {
      if (password !== confirmPassword) {
        setErrors({ ...errors, confirmPassword: 'Passwords do not match.' });
        return;
      }

      if (!nationalIdPattern.test(nationalId)) {
        setErrors({
          ...errors,
          nationalId: 'Please enter a valid National ID (14 digits only).'
        });
        return;
      }

      // All fields are filled, terms are checked, and national ID is valid
      alert('Registration successful!'); // Replace with your desired logic

      // Redirect the user to the login page or any other page
      nav('/'); // Replace '/login' with your desired route
    } else {
      // Set error states for empty fields
      setErrors({
        nationalId: !nationalId ? 'National ID is required.' : '',
        email: !email ? 'Email is required.' : '',
        password: !password ? 'Password is required.' : '',
        confirmPassword: !confirmPassword ? 'Confirm Password is required.' : '',
        accountNumber: !accountNumber ? 'Account Number is required.' : '',
        terms: !termsChecked ? 'Please accept the terms.' : ''
      });
    }
  };

  return (
    <div>
      <label>National ID:</label>
      <input
        type="text"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
      />
      {errors.nationalId && <p>{errors.nationalId}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p>{errors.password}</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <label>Account Number:</label>
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      {errors.accountNumber && <p>{errors.accountNumber}</p>}

      <label>
        <input
          type="checkbox"
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
        />
        Accept Terms
      </label>
      {errors.terms && <p>{errors.terms}</p>}

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
