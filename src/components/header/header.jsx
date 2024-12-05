import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/Cars",
    display: "Cars",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  console.log(menuRef, "ref");
  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
  return (
    <header className="header">
      {/* _________ top header _________*/}

      <div className="top_header">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="top_header_left  ">
                <span>Need Help?</span>
                <span className="top_header_help">
                  <i class="ri-phone-fill"></i> +1-222-333-5555
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="top_header_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-2 ">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
                <Link to="#" className=" d-flex align-items-center gap-2 ">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*__________ middle header ____________ */}

      <div className="middle_header">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <a href="#" className="d-flex align-items-center gap-3 ">
                    <i class="ri-car-line"></i>
                    <span>
                      Car Rent <br />
                      Services
                    </span>
                  </a>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-3">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div className="location_content">
                  <h4>Hyderabad</h4>
                  <h6>KPHB Colony, Hyderabad</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-3">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="location_content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="call_btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* _____ main navigator _____*/}

      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div
              className="navigation_items"
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className="menu">
                {navLinks.map((item, ind) => {
                  return (
                    <NavLink
                      to={item.path}
                      key={ind}
                      className={(menuClass) =>
                        menuClass.isActive
                          ? "menuItem_active menu_item"
                          : "menu_item"
                      }
                    >
                      {item.display}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <div className="nav_search">
              <div className="search_bar">
                <input type="text" placeholder="search a car..." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
export default Header;
