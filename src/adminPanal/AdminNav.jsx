import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../images/eco-logo.png";
import "../Style/Admin_Nav.css";

const AdminNav = () => {
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
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default AdminNav;
