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
      <div className="container">
      <ul className="content">
      <Box text="Enjoy our competitive interest rates and flexible repayment options" head="Apply for loan"/>
      <Box text="Enjoy the convenience of accessing a wide range of banking services" head="Open a bank account"/>
      <Box text="Start your credit journey with us and enjoy the benefits of our trusted banking services." head="Apply for a credit card"></Box>
      <Box text="our credit card replacement process ensures minimal disruption to your financial activities." head="Apply for a Credit Card Replacement"></Box>
      <Box text="If you no longer require our banking services
      , our streamlined account 
      closure process ensures a hassle-free experience." head="Close your Bank Account"></Box>
    </ul>
    </div>
    </div>
    )
}
export default Home;