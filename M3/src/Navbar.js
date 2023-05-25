import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';

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

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">BANK.</h1>
      </div>
      <div className="navbar-middle">
        <button onClick={gotoHome} className="navbar-button">
          Home
        </button>
        <button className="navbar-button">Bank Announcements</button>
        <button className="navbar-button">Contact Us</button>
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
          <MenuItem onClick={gotoLogin}>Logout</MenuItem>
          <MenuItem onClick={gotoProfile}>Account Settings</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
