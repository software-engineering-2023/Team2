import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    form3Example1cg: '',
    form3Example3cg: '',
    form3Example4cg: '',
    form3Example4cdg: '',
    form3Example5cg: '',
    form2Example3cg: false,
  });

  const [formErrors, setFormErrors] = useState({
    form3Example1cg: '',
    form3Example3cg: '',
    form3Example4cg: '',
    form3Example4cdg: '',
    form3Example5cg: '',
    form2Example3cg: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' });
  };

  const handleRegister = () => {
    const {
      form3Example1cg,
      form3Example3cg,
      form3Example4cg,
      form3Example4cdg,
      form3Example5cg,
      form2Example3cg,
    } = formValues;

    let valid = true;
    const errors = {
      form3Example1cg: '',
      form3Example3cg: '',
      form3Example4cg: '',
      form3Example4cdg: '',
      form3Example5cg: '',
      form2Example3cg: '',
    };

    // Validation checks
    if (!form3Example1cg) {
      errors.form3Example1cg = 'Please enter your National ID.';
      valid = false;
    } else if (form3Example1cg.length !== 14) {
      errors.form3Example1cg = 'National ID must be 14 digits.';
      valid = false;
    }

    if (!form3Example3cg) {
      errors.form3Example3cg = 'Please enter your email.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form3Example3cg)) {
      errors.form3Example3cg = 'Please enter a valid email.';
      valid = false;
    }

    if (!form3Example4cg) {
      errors.form3Example4cg = 'Please enter a password.';
      valid = false;
    }

    if (!form3Example4cdg) {
      errors.form3Example4cdg = 'Please confirm your password.';
      valid = false;
    } else if (form3Example4cdg !== form3Example4cg) {
      errors.form3Example4cdg = 'Passwords do not match.';
      valid = false;
    }

    if (form3Example5cg && (form3Example5cg.length !== 8 || !/^\d+$/.test(form3Example5cg))) {
      errors.form3Example5cg = 'Account number must be 8 digits.';
      valid = false;
    }

    if (!form2Example3cg) {
      errors.form2Example3cg = 'Please accept the terms.';
      valid = false;
    }

    if (valid) {
      // All fields are filled and terms are checked
      // alert('Registration successful!'); // Replace with your desired logic

      // Redirect the user to the login page or any other page
      navigate('/'); // Replace '/login' with your desired route
    } else {
      setFormErrors(errors);
      // alert('Please fill in all required fields and accept the terms.');
    }
  };

  return (
    <section className="vh-100 bg-image" style={{ backgroundColor: '#fff' }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6" style={{ width: '45vw' }}>
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <div className="row">
                    <div className="col-12 mx-auto">
                      <form>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example1cg">
                            National ID
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className={`form-control form-control-lg ${
                              formErrors.form3Example1cg ? 'is-invalid' : ''
                            }`}
                            onChange={handleInputChange}
                            value={formValues.form3Example1cg}
                            placeholder="28729275975489"
                          />
                          {formErrors.form3Example1cg && (
                            <div className="invalid-feedback">{formErrors.form3Example1cg}</div>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3cg"
                            className={`form-control form-control-lg ${
                              formErrors.form3Example3cg ? 'is-invalid' : ''
                            }`}
                            onChange={handleInputChange}
                            value={formValues.form3Example3cg}
                            placeholder="e.g. yassin_fayed@hotmail.com"
                          />
                          {formErrors.form3Example3cg && (
                            <div className="invalid-feedback">{formErrors.form3Example3cg}</div>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className={`form-control form-control-lg ${
                              formErrors.form3Example4cg ? 'is-invalid' : ''
                            }`}
                            onChange={handleInputChange}
                            value={formValues.form3Example4cg}
                          />
                          {formErrors.form3Example4cg && (
                            <div className="invalid-feedback">{formErrors.form3Example4cg}</div>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cdg">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cdg"
                            className={`form-control form-control-lg ${
                              formErrors.form3Example4cdg ? 'is-invalid' : ''
                            }`}
                            onChange={handleInputChange}
                            value={formValues.form3Example4cdg}
                          />
                          {formErrors.form3Example4cdg && (
                            <div className="invalid-feedback">{formErrors.form3Example4cdg}</div>
                          )}
                        </div>

                        {/* New input bar */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example5cg">
                            Account Number (if you have any)
                          </label>
                          <input
                            type="text"
                            id="form3Example5cg"
                            className={`form-control form-control-lg ${
                              formErrors.form3Example5cg ? 'is-invalid' : ''
                            }`}
                            onChange={handleInputChange}
                            value={formValues.form3Example5cg}
                            placeholder="e.g. 12398751"
                          />
                          {formErrors.form3Example5cg && (
                            <div className="invalid-feedback">{formErrors.form3Example5cg}</div>
                          )}
                        </div>

                        

                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-dark btn-lg btn-block"
                            onClick={handleRegister}
                          >
                            Register
                          </button>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">
                          Already have an account?{' '}
                          <a href="/" className="fw-bold text-body">
                            <u>Login here</u>
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
