import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../images/eco-logo.png";
import User from "../images/user-icon.png";
import "../Style/Admin_Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../custom/UseAuth";
import { auth } from "../Config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const AdminNav = () => {
  const navigate = useNavigate();
  const { currentUser } = UseAuth();
  const profileActionref = useRef(null);
  const LogOut = () => {
    Swal.fire({
      title: "Are you sure You won Log Out",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Logout Sucessfully");
        try {
          signOut(auth);
          navigate("/");
        } catch (e) {
          toast.error(e.message);
        }
      }
    });
  };

  const toggleProfile = () => {
    profileActionref.current.classList.toggle("show_profileAction");
  };
  const admin_nav = [
    {
      path: "/dashDordi",
      display: "DashBoard",
    },
    {
      path: "/dashDordi/all-product",
      display: "AllProduct",
    },
    {
      path: "/dashDordi/add-product",
      display: "AddProduct",
    },
    {
      path: "/ORderDashDordi",
      display: "Orders",
    },
    {
      path: "/U$eRDashoaRdi",
      display: "Users",
    },
  ];
  return (
    <>
      {/* <PrimarySearchAppBar /> */}
      <header className="admin_header">
        <div className="admin_top_Nav">
          <Container>
            <div className="admin_top-Nav-Wrapper">
              <div className="logo ">
                <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" />
                <div>
                  <h5>
                    ADMIN_PANAL
                  </h5>
                </div>
              </div>
              {/* <div className="search_box">
                <input type="text" placeholder="Search Here......" />

                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div> */}
              <div className="admin_nav_top_right">
                <span>
                  <i class="ri-notification-2-fill"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                <div></div>
                {/* <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={User}
                  alt="user"
                  onClick={toggleProfile}
                /> */}
                <div
                  className="profile_actions "
                  ref={profileActionref}
                  onClick={toggleProfile}
                >
                  {currentUser ? (
                    <span className="LogOut" onClick={LogOut}>
                      Logout{" "}
                    </span>
                  ) : (
                    <div className="lists d-flex  align-items-center justify-content-center flex-column">
                      <NavLink to={"/SignUp"}>signUp</NavLink>

                      <NavLink to={"/login"}>Login</NavLink>
                    </div>
                  )}
                </div>
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
                    <li className="admin_menu_item" key={index}>
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
