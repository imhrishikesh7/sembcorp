import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");
  const [subMenu, setSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenu(subMenu);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    setCurrentMenuTitle(menuTitle);
    setSubMenuActive(true);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      setCurrentMenuTitle("");
      setSubMenuActive(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <Link to="/"><img src="./home/sembcorp-logo.svg" alt="" /></Link>
            </div>
          </div>
          {/* Menu Start */}
          <div className="header-item item-center">
            <div className={`menu-overlay ${menuActive ? "active" : ""}`} onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? "active" : ""}`}>
              <div className="mobile-menu-head">
                <div className="go-back" onClick={hideSubMenu}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="current-menu-title">{currentMenuTitle}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
              </div>
              <ul className="menu-main" onClick={(e) => {
                if (!menuActive) return;
                if (e.target.closest(".menu-item-has-children")) {
                  showSubMenu(e.target.closest(".menu-item-has-children"));
                }
              }}>
                <li><Link to="/">Home</Link></li>
                
                <li className="menu-item-has-children">
                  <Link to="#">Corporate Overview <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      {/* <h4 className="title">Men's Fashion</h4> */}
                      
                      <ul>
                        <li><Link to="/catalysing-energy-transition">Catalysing energy transition</Link></li>
                        <li><Link to="/chairman-and-managing-directors-message">Chairman and Managing Director’s Message</Link></li>
                        <li><Link to="/hinduja-group">Profile of the Board of Directors</Link></li>
                        <li><Link to="/gulf-oil-international">Mapping our progress</Link></li>
                      </ul>
                      
                    </div>
                    <div className="list-item">
                    <h4 className="title">Embracing a sustainable tomorrow</h4>
                      <ul>
                        <li><Link to="/market-overview">Accelerating cleaner energy 
                        adoption in India</Link></li>
                        <li><Link to="#">Mergers and acquisitions</Link></li>
                        <li><Link to="#">Case studies</Link></li>
                        <li><Link to="#">Building an empowered talent pool</Link></li>
                      </ul>
                      
                    </div>
                    <div className="list-item">
                      <h4 className="title">Protecting the environment and the community</h4>
                      <ul>
                        <li><Link to="#">Committed to making a difference</Link></li>
                        <li><Link to="#">CSR Report</Link></li>
                        <li><Link to="#">Annexures</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <img src="./home/nav1.png" alt="Chair" />
                      <div className="website-link">
                      <p className="website">Website: <Link className="font-semibold" to="https://www.sembcorp.com/" target="_blank">www.sembcorp.com</Link></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Statutory Reports <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="#">Management Discussion and Analysis</Link></li>
                      <li><Link to="#">Board’s Report</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-menu2 mega-menu-column-2">
                    <div className="list-item">
                      <h4 className="title">Standalone Financial Statements</h4>
                      <ul>
                        <li><Link to="/at-a-glance">Independent Auditor’s Report</Link></li>
                        <li><Link to="/unlock-2.0">Financial Statements</Link></li>
                      </ul>
                      <h4 className="title">Consolidated Financial Statements</h4>
                      <ul>
                        <li><Link to="/market-overview">Independent Auditor’s Report</Link></li>
                        <li><Link to="#">Financial Statements</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="#">Standalone</Link></li>
                      <li><Link to="#">Consolidated</Link></li>
                      <li><Link to="#">Notice of the 16  Annual General Meeting</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="/">AGM Notice</Link></li>

                {/* <li><Link to="#">Contact</Link></li> */}
              </ul>
            </nav>
          </div>
          {/* Menu End */}
          <div className="header-item item-right">
            <Link to="#"><img src="./home/pdf.png" alt="" className="w-[50px]" /></Link>
            {/* <Link to="#"><FontAwesomeIcon icon={faSearch} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faHeart} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faShoppingCart} /></Link> */}
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;