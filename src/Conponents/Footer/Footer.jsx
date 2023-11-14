import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../images/counter-timer-img.png'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (

    <footer className='footer1'>
      <Container>
        <Row>
          <Col lg="4" className='mb-4' md='6' >
            <div className='logo'>
              {/* <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" /> */}
              <div>
                <h5 className='text-white fs-6'>DREAM-FURNITURE  <br /> Since 1999</h5>
              </div>
            </div>
            <p className='footer_text mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dicta magnam mollitia ratione explicabo quam temporibus id
              inventore pariatur eum saepe.
            </p>
          </Col>
          <Col lg="3" className='mb-4'>
            <div className="footer_quick_links">
              <h4 className='quick_link_title'>
                Top Categories
              </h4>
              <ListGroup className='footer_contact  mb-3' >
                <ListGroupItem className='ps-0 border-0 ' >
                  <NavLink to={"#"}> MODERN SOFA  </NavLink>
                </ListGroupItem >
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"#"}> BEST BED </NavLink>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"#"}> DREAM FURNITURE</NavLink>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"#"}> ARM CHAIR  </NavLink>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className='mb-4'>
            <div className="footer_quick_links">
              <h4 className='quick_link_title'>
                UseFull Link
              </h4>
              <ListGroup className='mb-3' >
                <ListGroupItem className='ps-0 border-0' >
                  <NavLink to={"/Shop"}> Shop  </NavLink>
                </ListGroupItem >
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"/Card"}> Card </NavLink>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"/Login"}> Login </NavLink>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <NavLink to={"#"}> Privacy Policy  </NavLink>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className='mb-4'>
            <div className="footer_quick_links">
              <h4 className='quick_link_title'>
                Contact
              </h4>
              <ListGroup className='mb-3' >
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>786 clifton 3 talwar furniture karachi  Pakistan</p>
                </ListGroupItem >
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  <p>+92-03003003003</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-send-fill"></i></span>
                  <p>Email@Dreamfurniture.com.pk</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12' className='mb-4'>
            <p className="footer_copyright">
              <i class="ri-copyright-line"></i> Copyright {year} Dream Furniture All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer