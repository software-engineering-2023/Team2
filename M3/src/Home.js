import './index.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Box from './Box';
import React from 'react';

const Home = () => {


    
    return (
    <div className="Home"> 
      <Navbar></Navbar>
      <h1 className="header">Banking Made Easy</h1>
      <p className="desc">Spend, save and manage your money, all in one place.</p>
      <div className="contwrap">
      <ul className="content">
      <Box text="" head="My Loans" dest="/myloans"/>
      <Box text="" head="My Bank Accounts" dest="/myaccounts"/>
      <Box text="" head="My Credit Cards" dest ="/mycreditcards"></Box>
      <Box text="" head="My Bills" dest ="/mybills"></Box>
    </ul>
    </div>
    </div>
    )
}
export default Home;