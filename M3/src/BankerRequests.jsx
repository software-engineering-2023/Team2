import React from "react";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import Box from "./Box";
import './banker.css';
import { useNavigate } from "react-router-dom";
import BankerNavBar from "./BankerNavBar";

const BankerRequests = () => {



    return(
        <div className="bigone">
            <BankerNavBar></BankerNavBar>
            {/* <Second></Second> */}
            <div className="boxwrap">
                <Box text="" head="Review Credit Card Applications" dest="/bankerCCrequests"/>
                <Box text="" head="Review Opening Bank Account Applications" dest="/bankerOpenrequests"/>
                <Box text="" head="Review Loan Applications" dest="/bankerLoanrequests"/>
            </div>
            <div className="boxwraplevel1">
                <Box text="" head="Review Replacement Applications" dest="/bankerReplacementrequests"/>
                <Box text="" head="Review Car Loan Requests" dest="/bankercar"/>
                <Box text="" head="Review Account Closing Requests" dest="/bankerclose"/>
            </div>

        </div>
    );
};
export default BankerRequests;