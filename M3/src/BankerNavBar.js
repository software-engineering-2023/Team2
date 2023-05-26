import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';

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
    nav('/acc');
  };

  const gotoRequests = () =>{
    nav('/bankerrequests');
  };

  const gotoReport = () =>{
    nav('/bankerHome');
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">BANK.</h1>
      </div>
      <div className="navbar-middle">
        <button onClick={gotoHome} className="navbar-button">
          Home
        </button>
        <button className="navbar-button" onClick={gotoRequests}>View Requests</button>
        <button className="navbar-button" onClick={gotoHome}>Report Technical Issue</button>
      </div>
      <div className="navbar-right">
        <IconButton style={{ color: '#ffffff' }}
          className="navbar-button"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={openMenu}
        >
          <AccountCircle />
          <KeyboardArrowDown style={{ color: '#ffffff' }} />
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          
          <MenuItem onClick={gotoProfile}>Account Settings</MenuItem>
          <MenuItem onClick={gotoLogin}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default BankerNavBar;
