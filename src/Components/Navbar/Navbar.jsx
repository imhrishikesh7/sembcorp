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
                        <li><Link to="/profile-of-the-board-of-directors">Profile of the Board of Directors</Link></li>
                        <li><Link to="/mapping-our-progress">Mapping our progress</Link></li>
                      </ul>
                      
                    </div>
                    <div className="list-item">
                    <h4 className="title">Embracing a sustainable tomorrow</h4>
                      <ul>
                        <li><Link to="/accelerating-cleaner-energy-adoption-in-india">Accelerating cleaner energy 
                        adoption in India</Link></li>
                        <li><Link to="/driving-brown-to-green-transition">Driving brown-to-green transition</Link></li>
                        <li><Link to="/mergers-and-acquisitions">Mergers and acquisitions</Link></li>
                        <li><Link to="/case-studies">Case studies</Link></li>
                        <li><Link to="/building-an-empowered-talent-pool">Building an empowered talent pool</Link></li>
                      </ul>
                      
                    </div>
                    <div className="list-item">
                      <h4 className="title">Protecting the environment and the community</h4>
                      <ul>
                        <li><Link to="./docs/committed to making a difference.pdf" target="_blank">Committed to making a difference</Link></li>
                        <li><Link to="./docs/csr report.pdf" target="_blank">CSR Report</Link></li>
                        <li><Link to="./docs/annexures.pdf" target="_blank">Annexures</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <img src="./home/nav1.png" alt="Chair" />
                      <div className="website-link">
                      <p className="website text-[14px]">Website: <Link className="underline inline-block text-[14px" to="https://www.sembcorp.com/" target="_blank"> www.sembcorp.com</Link></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Statutory Reports <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="./docs/mda.pdf" target="_blank">Management Discussion and Analysis</Link></li>
                      <li><Link to="./docs/boards report.pdf" target="_blank">Board’s Report</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-menu2 mega-menu-column-2">
                    <div className="list-item">
                      <h4 className="title">Standalone Financial Statements</h4>
                      <ul>
                        <li><Link to="./docs/Independent Auditor’s Report sfs.pdf" target="_blank">Independent Auditor’s Report</Link></li>
                        <li><Link to="./docs/sfs.pdf" target="_blank">Financial Statements</Link></li>
                      </ul>
                      <h4 className="title">Consolidated Financial Statements</h4>
                      <ul>
                        <li><Link to="./docs/Independent Auditor’s Report cfs.pdf" target="_blank">Independent Auditor’s Report</Link></li>
                        <li><Link to="./docs/cfs.pdf" target="_blank">Financial Statements</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><Link to="./docs/notice.pdf" target="_blank">Notice</Link></li>

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
