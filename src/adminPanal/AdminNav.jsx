import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../images/eco-logo.png";
import User from "../images/user-icon.png";
import "../Style/Admin_Nav.css";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  const admin_nav = [
    {
      path: "/dashBoard",
      display: "DashBoard",
    },
    {
      path: "/dashBoard/all-product",
      display: "AllProduct",
    },
    {
      path: "/dashBoard/Orders",
      display: "Orders",
    },
    {
      path: "/dashBoard/Users",
      display: "Users",
    },
  ];
  return (
    <>
      <header className="admin_header">
        <div className="admin_top_Nav">
          <Container>
            <div className="admin_top-Nav-Wrapper">
              <div className="logo">
                <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" />
                <div>
                  <h5>
                    DREAM-FURNITURE <br /> Since 1999
                  </h5>
                </div>
              </div>
              <div className="search_box">
                <input type="text" placeholder="Search Here......" />

                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <div className="admin_nav_top_right">
                <span>
                  <i class="ri-notification-2-fill"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                <motion.img whileTap={{ scale: 1.3 }} src={User} alt="user" />
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin_menu">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admim_menu-list">
                {admin_nav.map((item, index) => {
                  return (
                    <li className="admin_menu_item"  key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav_active1" : " "
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default AdminNav;
