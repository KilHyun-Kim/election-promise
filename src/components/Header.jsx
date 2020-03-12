import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoInfo } from "react-icons/go";

const Header = () => {
  let [value, setValue] = useState(false);
  useEffect(() => {
    if (value) {
      document.querySelector(".infoList").style.display = "block";
    } else {
      document.querySelector(".infoList").style.display = "none";
    }
  });
  // buttonHover(){
  //   document.querySelector('.infoList').style.display="block"
  // }

  return (
    <header>
      <div className="header-container">
        <div className="header-contents">
          <Link to="/">
            <button>
              <AiOutlineHome size={40} />
            </button>
          </Link>
          <Link to="/" className="logo">
            Algoppobja
          </Link>
          <Link to="/info">
            <button
              onMouseEnter={() => setValue((value = true))}
              onMouseLeave={() => setValue((value = false))}
            >
              <GoInfo size={40} />
              <div className="infoList">
                <div>
                  <Link to="/info">페이지의 정보를 볼 수 있습니다.</Link>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
