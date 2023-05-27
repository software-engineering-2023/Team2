import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';

const CardDesign = ({ cvc, expiry, name, number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleClick}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        name={name}
        number={number}
        focused={isFlipped ? 'cvc' : 'name'}
        flipped={isFlipped}
      />
    </div>
  );
};

export default CardDesign;
