import React , {useState} from 'react';

const Box = ({text,backgroundImg,head}) => {
    const [isHovered, setIsHovered] =  useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    
    return (
        <div
          className={`box ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        
        >
          <h3 className={`head ${isHovered ? 'head-hovered' : ''}`}>{head}</h3>
          <p className= {`box-text ${isHovered ? 'text-hovered' : ''}`}>{text}</p>
          <button className="box-button">Explore</button>
        </div>
      );
};

export default Box;