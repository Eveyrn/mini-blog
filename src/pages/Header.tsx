import React from "react";
import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa"; 
import "./Css-styles/Header.css"; 

const Header: React.FC = () => {
  return (
    <header>
    
      <FaReddit size={40} color="white" /> 
      <h1>Mini-Reddit</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/create">Создать пост</Link>
      </nav>
    </header>
  );
};

export default Header;
