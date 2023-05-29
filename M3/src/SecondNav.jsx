import React from 'react';
import { useNavigate } from 'react-router-dom';

const Second = () => {
  const nav = useNavigate();

  const gotoCreditCards = () => {
    nav('/mycreditcards');
  };

  const gotoAccounts = () => {
    nav('/myaccounts');
  };

  const gotoLoans = () => {
    nav('/myloans');
  };

  const gotoBills = () => {
    nav('/mybills');
  };

  const goBack = () => {
    nav(-1); // Go back to the previous page
  };

  return (
    <nav className="navbar-second">
      <div className="navbar-second-middle">
        <button onClick={gotoCreditCards} className="navbar-button">My Credit Cards</button>
        <button onClick={gotoAccounts} className="navbar-button">My Accounts</button>
        <button onClick={gotoLoans} className="navbar-button">My Loans</button>
        <button onClick={gotoBills} className="navbar-button">My Bills</button>
      </div>
    </nav>
  );
};

export default Second;
