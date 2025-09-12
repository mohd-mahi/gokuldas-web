import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import NewsTicker from "./TopHeader";
import products from "../../components/data/accordionData";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;

    const scrollFunction = () => {
      if (window.pageYOffset > headerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  // Slug maker
  const makeSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <header ref={headerRef}>
      <NewsTicker />

      <div className={`main-header ${scrolled ? "active" : ""}`}>
        <div className="container">
          <div className="nav-container">
            {/* Desktop menu */}
            <ul className="nav-links d-none d-lg-flex">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  onClick={() => setActive(!active)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                  to="/about-us"
                  onClick={() => setActive(!active)}
                >
                  WHO WE ARE
                </Link>
              </li>

              {/* Desktop Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/products") ? "active" : ""
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  OUR PRODUCTS
                </button>

                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  onWheel={(e) => e.stopPropagation()}
                >
                  {products.map((cat) => {
                    const slug = makeSlug(cat.title);
                    const activeClass =
                      location.pathname === `/products/${slug}` ? "active" : "";
                    return (
                      <li key={cat.id}>
                        <Link
                          className={`dropdown-item ${activeClass}`}
                          to={`/products/${slug}`}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setActive(false);
                          }}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>

            {/* Logo */}
            <Link to="/" className="logo">
              <img src="/images/logo.png" className="img-fluid" alt="Logo" />
            </Link>

            {/* Mobile Menu */}
            <nav className={`navbar-links ${active ? "active" : ""}`}>
              <ul className="nav-links">
                <li className="nav-item d-block d-lg-none">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    to="/"
                    onClick={() => setActive(!active)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about-us" ? "active" : ""
                    }`}
                    to="/about-us"
                    onClick={() => setActive(!active)}
                  >
                    WHO WE ARE
                  </Link>
                </li>

                {/* Mobile Dropdown */}
                <li className="nav-item dropdown d-flex d-lg-none">
                  <button
                    className={`nav-link dropdown-toggle ${
                      location.pathname.startsWith("/products") ? "active" : ""
                    }`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    OUR PRODUCTS
                  </button>

                  <ul
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                    onWheel={(e) => e.stopPropagation()}
                  >
                    {products.map((cat) => {
                      const slug = makeSlug(cat.title);
                      const activeClass =
                        location.pathname === `/products/${slug}`
                          ? "active"
                          : "";
                      return (
                        <li key={cat.id}>
                          <Link
                            className={`dropdown-item ${activeClass}`}
                            to={`/products/${slug}`}
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setActive(false);
                            }}
                          >
                            {cat.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" to="?">
                    NEWS & MEDIA
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/review" ? "active" : ""
                    }`}
                    to="/review"
                    onClick={() => setActive(!active)}
                  >
                    REVIEWS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/contact-us" ? "active" : ""
                    }`}
                    to="/contact-us"
                    onClick={() => setActive(!active)}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Hamburger */}
            <button
              type="button"
              className="hamburger-menu"
              onClick={() => setActive(!active)}
            >
              <span
                className={`hamburger-menu-One ${active ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-menu-two ${active ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-menu-three ${active ? "active" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`overlay ${active ? "active" : ""} d-lg-none d-block`}
          onClick={() => setActive(!active)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
