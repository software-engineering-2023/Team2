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
    
      const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormValues({ ...formValues, [id]: value });
      };
    
      const handleRegister = () => {
        const { form3Example1cg, form3Example3cg, form3Example4cg, form3Example4cdg, form2Example3cg } = formValues;
    
        if (form3Example1cg && form3Example3cg && form3Example4cg && form3Example4cdg && form2Example3cg) {
          // All fields are filled and terms are checked
          alert('Registration successful!'); // Replace with your desired logic
    
          // Redirect the user to the login page or any other page
          navigate('/'); // Replace '/login' with your desired route
        } else {
          alert('Please fill in all required fields and accept the terms.');
        }
      };
  

  return (
    <section className="vh-100 bg-image" style={{ backgroundColor: '#1b2e99' }}>
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
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example1cg">
                            National ID
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example3cg">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cg">
                            Password
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4cdg"
                            className="form-control form-control-lg"
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cdg">
                            Confirm Password
                          </label>
                        </div>

                        {/* New input bar */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example5cg"
                            className="form-control form-control-lg"
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example5cg"
                          >
                            Account Number (if you have any)
                          </label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3cg"
                            onChange={(event) => {
                              const { checked } = event.target;
                              setFormValues({ ...formValues, form2Example3cg: checked });
                            }}
                          />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree to all the statements in{' '}
                            <a href="#!" className="text-body">
                              <u>Terms of Service</u>
                            </a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
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