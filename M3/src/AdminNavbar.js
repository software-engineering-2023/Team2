



import React from 'react';
import './index.css' ;

import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  // const [ redirectToHome , setRedirectToHome] = useState(false);

  // function handleButtonClick() {
  //   setRedirectToHome(true);
  // }
  // if (redirectToHome){
  //   return <Redirect to = "/Login" />
  // }
  const nav = useNavigate();

  const gotoLogin = () => {
    nav("/");
  }
  


    return (
        <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">BANK.</h1>
      </div>
      <div className="navbar-middle">
        <button className="navbar-button" onclick=" ">Home</button>
        <button className="navbar-button">Technical Issues</button>
        <button  className="navbar-button">Announcements</button>
      </div>
      <div className="navbar-right">
         
       <button onClick={gotoLogin} className="navbar-button">Logout</button>
      
      </div>
    </nav>
      );
}
 
export default AdminNavbar;