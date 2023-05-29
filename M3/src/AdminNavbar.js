

import React from 'react';
import './index.css' ;
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


const AdminNavbar = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const gotoLogin = () => {
    nav('/admin');
  };

  const gotoHome = () => {
    nav('/adminhome');
  };

  const gotoAnnounce = () => {
    nav('/announce');
  };

  const gotoIssues = () => {
    nav('/issues');
  } 



  
  


    return (
        <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">BANK.</h1>
      </div>
      <div className="navbar-middle">
        <button className="navbar-button" onClick={gotoHome}>Home</button>
        <button className="navbar-button" onClick={gotoIssues}>Technical Issues</button>
        <button  className="navbar-button" onClick={gotoAnnounce}>Announcements</button>
      </div>
      <div className="navbar-right">
         
       <button onClick={gotoLogin} className="navbar-button">Logout</button>
      
      </div>
    </nav>
      );
}
 
export default AdminNavbar;