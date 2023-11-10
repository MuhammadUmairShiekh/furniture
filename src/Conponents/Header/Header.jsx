import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'
import { Container, Row, Col } from 'reactstrap'
import logo from '../../images/eco-logo.png'
import User from '../../images/user-icon.png'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'
const Header = () => {
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
    },
  ]
  return (
    <>
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" />
              <div>
                <h5>DREAM-FURNITURE  <br /> Since 1999</h5>
                {/* <p>Since 1999</p> */}
              </div>
            </div>
            <div className="navigation">
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
              <span className='card_icon'>
                < i class="ri-shopping-bag-line"></i>
                <span className='badge'>1</span>

              </span>
              <span>< motion.img whileTap={{ scale: 1.3 }} src={User} alt="user" /></span>
            </div>
            <div className='mobile_menu'>
              <span><i class="ri-menu-3-line"></i>
              </span>
            </div>
          </div>
        </Row>
        <Outlet />
      </Container>
    </header>
    
    </>
  )
}

export default Header