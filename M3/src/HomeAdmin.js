
import './HomeAdmin.css';
import AdminNavbar from './AdminNavbar';
import { useState } from 'react';
import Box from './Box';
import React from 'react';

const HomeAdmin = () => {


    
    return (
    <div className="Home"> 
    <AdminNavbar></AdminNavbar>
      <h1 className="header">Welcome Admin</h1>
      <div className="container">
      <ul className="content">
        <div class= "Adminboxes">
      <Box  head="View technical issues" dest="/issues" />
      <Box  head="A3mel Announcement" dest="/announce"></Box>
      </div>
    </ul>
    </div>
    </div>
    )
}
export default HomeAdmin;