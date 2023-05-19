import React from 'react';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Bank Announcements</button>
        <button  className="navbar-button">Contact Us</button>
      </div>
      <div className="navbar-right">
         
       <button onClick={gotoLogin} className="navbar-button">Logout</button>
      
        <button className="navbar-button">Profile</button>
      </div>
    </nav>
      );
}
 
export default Navbar;