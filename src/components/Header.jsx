import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-contents">
          <Link to="/">
            <button>
              <AiOutlineHome size={40} />
            </button>
          </Link>
          <Link to="/">Algoppobja</Link>
          <Link to="/">
            <button>
              <IoMdMoon size={40} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
