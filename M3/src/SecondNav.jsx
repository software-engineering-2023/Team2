import React from 'react';
import { useNavigate } from 'react-router-dom';
;

const Second = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const gotoCreditCards = () => {
    nav('/mycreditcards');
  };

  const gotoHome = () => {
    nav('/home');
  };
  
  const gotoBills = () => {
    nav("/mybills");
  }

  const gotoAccounts = () => {
    nav("/myaccounts");
  }

  const gotoLoans = () => {
    nav("/myloans");
  }

  const goBack = () => {
    nav(-1); // Go back to the previous page
  };

  const gotoProfile = () => {
    nav('/acc');
  };

  return (
    <nav className="navbar-second">
      <div className="navbar-second-middle">
        <button onClick={goBack} className="navbar-button">Back</button>
        <button onClick={gotoCreditCards} className="navbar-button">My Credit Cards</button>
        <button onClick={gotoAccounts} className="navbar-button">My Accounts</button>
        <button onClick={gotoLoans} className="navbar-button">My Loans</button>
        <button onClick={gotoBills} className="navbar-button">My Bills</button>
      </div>
    </nav>
  );
};

export default Second;
