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

  const gotoProfile = () => {
    nav('/acc');
  };

  return (
    <nav className="navbar-second">
      <div className="navbar-second-middle">
        <button onClick={gotoCreditCards} className="navbar-button">My Credit Cards</button>
        <button className="navbar-button">My Accounts</button>
        <button className="navbar-button">My Loans</button>
        <button className="navbar-button">My Bills</button>
      </div>
    </nav>
  );
};

export default Second;
