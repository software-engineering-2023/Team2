import React from "react";
import Box from "./Box";
import Navbar from "./Navbar";
import Second from "./SecondNav";

const ReviewApps = () => {
    return(
        <div className="bigone">
        <Navbar></Navbar>
        <Second></Second>
        <div className="boxwrap">
            <Box text="" head="Credit Card Requests" dest="/bankerreviewcreditrequests"/>
            <Box text="" head="Personal Loan Requests" dest="/bankerreviewloanrequests"/>
            <Box text="" head="Card Replacement Requests" dest="/bankerreviewreplacementrequests"/>
        </div>
        <div className="boxwraplevel1">
            <Box text="" head="Account Opening Requests" dest="/bankerreviewopenrequests"/>
            <Box text="" head="Account Closing Requests" dest="/bankerclose"/>
            <Box text="" head="Car Loan Requests" dest="/bankercar"/>
        </div>
    </div>
    );
};
export default ReviewApps;