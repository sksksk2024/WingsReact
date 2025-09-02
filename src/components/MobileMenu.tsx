import { useState, useEffect } from "react";
import "./../index.css";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setIsMobile] = useState(
    window.matchMedia("(max-width: 40em)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 40em)");
    interface MediaQueryEvent {
      matches: boolean;
    }

    const handleMediaChange = (e: MediaQueryEvent) => setIsMobile(e.matches);

    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.classList.add("no-scroll", "menu-open");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll", "menu-open");
  };

  return (
    <nav className="topnav">
      <button id="btnOpen" aria-expanded={menuOpen} onClick={openMenu}>
        Open Menu
      </button>
      <div className={`topnav__menu ${menuOpen ? "menu-open" : ""}`}>
        <button id="btnClose" aria-expanded={menuOpen} onClick={closeMenu}>
          Close Menu
        </button>
        {/* Add your menu items here */}
      </div>
    </nav>
  );
};

export default MobileMenu;
