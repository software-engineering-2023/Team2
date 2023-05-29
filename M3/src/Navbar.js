import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';
import Logo from './Logo.png';
import Notifications from './Notifications';

const Navbar = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const gotoLogin = () => {
    nav('/');
  };

  const gotoHome = () => {
    nav('/home');
  };

  const gotoProfile = () => {
    nav('/acc');
  };

  const gotoReports = () => {
    nav('/reports');
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
        <button onClick={gotoReports} className="navbar-button">Report Technical Issue</button>
      </div>
      <div className="navbar-right">
        <Notifications></Notifications>
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

export default Navbar;
