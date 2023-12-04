import React, { useEffect, useRef } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Header.css'
import { Container, Row, Col } from 'reactstrap'
import logo from '../../images/eco-logo.png'
import User from '../../images/user-icon.png'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'


const Header = () => {
  const navigate = useNavigate()
  const navigateToCart = () =>{
    navigate("/card")
  }
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const nav_link = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: 'Shop',
      display: 'Shop',
    },
    {
      path: 'Card',
      display: 'Card',
    }
  ]
  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerRef.current.classList.add("sticky_Nav");
        
      }
      else {
        headerRef.current.classList.remove("sticky_Nav");
      }
    })
  };
  useEffect(() => {
    stickyHeader()
    return () => window.removeEventListener("scroll", stickyHeader)
  }, []);

  const muneToggle = () => menuRef.current.classList.toggle("active_menu")
  return (
    <>
      <header className='header ' ref={headerRef}   >
        <Container className='sticky-top'> 
          <Row>
            <div className='nav_wrapper'>
              <div className='logo'>
                <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" />
                <div>
                  <h5>DREAM-FURNITURE  <br /> Since 1999</h5>
                  {/* <p>Since 1999</p> */}
                </div>
              </div>
              <div className="navigation" ref={menuRef} onClick={muneToggle}  >
                <ul className='menu'>
                  {
                    nav_link.map((item, index) => {
                      return <li className='nav_Item' key={index} >
                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ' '}>
                          {item.display}</NavLink>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className='nav_icon'>
                <span className='fav_icon'>
                  <i class="ri-heart-line"></i>
                  <span className='badge'>1</span>
                </span>
                <span className='card_icon' onClick={navigateToCart}>
                  < i class="ri-shopping-bag-line"></i>
                  
                  <span className='badge'>{totalQuantity}</span>

                </span>
                <span>< motion.img whileTap={{ scale: 1.3 }} src={User} alt="user" /></span>
                <div className='mobile_menu'>
                  <span onClick={muneToggle} >
                    <i class="ri-menu-3-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Outlet />

      </header>

    </>
  )
}

export default Header