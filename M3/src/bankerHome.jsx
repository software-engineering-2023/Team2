import React from "react";
import BankerNavBar from "./BankerNavBar";
import Second from "./SecondNav";
import Box from "./Box";
import './banker.css';
import { useNavigate } from "react-router-dom";

const BankerHome = () => {



    return(
        <div className="bigone">
            <BankerNavBar></BankerNavBar>
           {/* <Second></Second> */}
            <div className="boxwrap">
                <Box text="" head="Review Applications" dest="/bankerrequests"/>
                <Box text="" head="View Clients' Transacions" dest="/clientinfo"/>
                <Box text="" head="Report Technical Issue" dest="/bankerrequests"/>
            </div>

        </div>
    );
};

export default BankerHome;