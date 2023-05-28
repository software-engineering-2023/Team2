import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Acc.css';
import Navbar from "./Navbar";


const AccountSettings = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#fff' }}>
        <Navbar></Navbar>
    <div className="container light-style flex-grow-1 container-p-y">
  <div className="card account-card">
    <div className="row no-gutters row-bordered row-border-light">
      <div className="col-md-3 pt-0">
        <div className="list-group list-group-flush account-settings-links">
          <a
            className="list-group-item list-group-item-action active"
            data-toggle="list"
            href="#account-general"
          >
            General
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#account-change-password"
          >
            Change password
          </a>
        </div>
      </div>
      <div className="col-md-9">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
            <hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  defaultValue="Yassin Fayed"
                />
              </div>
              <div className="form-group">
                <label className="form-label">National ID</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="123908712401984"
                />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  defaultValue="yassin_fayed@hotmail.com"
                />
                <div className="alert alert-success mt-3">
                  Your email was verified successfully
                  <br />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="10/01/2002"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-change-password">
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Current password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">New password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Repeat new password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          
          <div className="tab-pane fade" id="account-notifications">
            <div className="card-body pb-2">
              <h6 className="mb-4">E-mails</h6>
              <div className="form-group">
                <label className="switcher">
                  <input
                    type="checkbox"
                    className="switcher-input"
                    defaultChecked=""
                  />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">
                    Email me if there is a a personal technical issue resolution
                  </span>
                </label>
              </div>
              <div className="form-group">
                <label className="switcher">
                  <input
                    type="checkbox"
                    className="switcher-input"
                    defaultChecked=""
                  />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">
                    Email me when there are new bank announcements
                  </span>
                </label>
              </div>
              <div className="form-group">
                <label className="switcher">
                  <input type="checkbox" className="switcher-input" />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">
                    Email me when there is a reminder for any bill
                  </span>
                </label>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Application Notifications</h6>
              <div className="form-group">
                <label className="switcher">
                  <input
                    type="checkbox"
                    className="switcher-input"
                    defaultChecked=""
                  />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Bank Announcements</span>
                </label>
              </div>
              <div className="form-group">
                <label className="switcher">
                  <input type="checkbox" className="switcher-input" />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Issue resolution</span>
                </label>
              </div>
              <div className="form-group">
                <label className="switcher">
                  <input
                    type="checkbox"
                    className="switcher-input"
                    defaultChecked=""
                  />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Reminders</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-right mt-3">
    <button type="button" className="btn btn-primary save-button">
      Save changes
    </button>
    &nbsp;
    <button type="button" className="btn btn-default cancel-button">
      Cancel
    </button>
  </div>
</div>
</div>
  );
}
export default AccountSettings;
