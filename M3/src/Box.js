import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Box = ({text,head,dest}) => {
    const [isHovered, setIsHovered] =  useState(false);
    const nav =useNavigate();

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const handleExploreClick = () => {
        nav(dest);
    };

    
    return (
        <div
          className={`box ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        
        >
          <h3 className={`head ${isHovered ? 'head-hovered' : ''}`}>{head}</h3>
          <p className= {`box-text ${isHovered ? 'text-hovered' : ''}`}>{text}</p>
          <button className="box-button" onClick={handleExploreClick}>Explore</button>
        </div>
      );
};

export default Box;