import './../index.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__button">
        <a href="index.html" className="header__central1">Produse</a>
        <a href="info.html" className="header__central2">Info</a>
      </div>
      
      <nav>
        <span id="nav-label" hidden>Navigation</span>
        <button
          id="btnOpen"
          className="topnav__blockm topnav__open"
          aria-expanded="false"
          aria-labelledby="nav-label"
        >
          <img src="./../../public/images/wings.png" alt="" width="50" height="45" />
        </button>
        
        <div className="topnav__menu" role="dialog" aria-labelledby="nav-label">
          <button className="topnav__close" id="btnClose" aria-label="Close">
            <img src="./../../public/images/close.png" alt="" width="28" height="27" />
          </button>
          <ul className="topnav__links">
            <li className="topnav__item">
              <a href="https://www.instagram.com/wings__sw/" target="_blank" className="topnav__link">@wings__sw</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;