import React, { useState } from 'react';
import Navbar from './Navbar';
import CardDesign from './CardDesign'
import Box from './Box';
import './Page.css';
import Second from './SecondNav';

const CreditCardPage = () => {
    return(
        <div className="parent">
        <Navbar></Navbar>
        <Second></Second>
        <div className="card-section">
        <CardDesign
        cvc="123"
        expiry="12/24"
        name="CARDHOLDER 1"
        number="4934567890123456"
      />
      <CardDesign
        cvc="456"
        expiry="06/25"
        name="CARDHOLDER 2"
        number="1234567890123456"
      />
      <CardDesign
        cvc="456"
        expiry="06/25"
        name="CARDHOLDER 2"
        number="5555567890123456"
      />
      
      </div>
      <div className="box-section">
      <Box text="" head="View My Transactions" dest="/creditcardtransactions"/>
      <Box text="" head="Apply for a Credit Card" dest="/applyforcredit"/>
      <Box text="" head="Apply for Replacement" dest="/applyforreplacement"/>
      <Box text="" head="Report Credit Card Theft" dest="/open"/>
      </div>
        </div>
    )
}

export default CreditCardPage;