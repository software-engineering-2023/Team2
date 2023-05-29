import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';
import Logo from './Logo.png'
import Notifications from './Notifications';
import BankerNote from './BankerNote'

const BankerNavBar = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const gotoLogin = () => {
    nav('/banker');
  };

  const gotoHome = () => {
    nav('/bankerHome');
  };

  const gotoProfile = () => {
    nav('/bankeraccount');
  };

  const gotoRequests = () =>{
    nav('/bankerrequests');
  };

  const gotoReport = () =>{
    nav('/bankerissues');
  };

  const gotoAccount = () =>{
    nav('/bankeraccount');
  }


  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <h4 className="pok">RISE BANK</h4>
      </div>
      <div className="navbar-middle">
        <button onClick={gotoHome} className="navbar-button">
          Home
        </button>
        <button className="navbar-button" onClick={gotoRequests}>View Requests</button>
        <button className="navbar-button" onClick={gotoReport}>Report Technical Issue</button>
      </div>
      <div className="navbar-right">
        <BankerNote></BankerNote>
      <button className="navbar-button" onClick={gotoLogin}>Logout</button>
      </div>
    </nav>
  );
};

export default BankerNavBar;
