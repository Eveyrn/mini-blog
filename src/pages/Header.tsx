// import React from "react";
// import { Link } from "react-router-dom";
// import "./Css-styles/Header.css"; // Импортируем стили для Header

// const Header: React.FC = () => {
//   return (
//     <header>
//       <h1>Mini-Reddit</h1>
//       <nav>
//         <Link to="/">Главная</Link>
//         <Link to="/create">Создать пост</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa"; // Логотип Reddit из React Icons
import "./Css-styles/Header.css"; // Импортируем стили для Header

const Header: React.FC = () => {
  return (
    <header>
      {/* Логотип Reddit */}
      <FaReddit size={40} color="white" /> {/* Вы можете настроить размер и цвет */}
      <h1>Mini-Reddit</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/create">Создать пост</Link>
      </nav>
    </header>
  );
};

export default Header;
