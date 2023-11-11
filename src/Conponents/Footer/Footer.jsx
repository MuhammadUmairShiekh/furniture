import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import logo from '../../images/eco-logo.png'
import { motion } from 'framer-motion'


const Footer = () => {
  return (

    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4">
            <div className='logo'>
              <motion.img whileTap={{ scale: 1.2 }} src={logo} alt="" />
              <div>
                <h5>DREAM-FURNITURE  <br /> Since 1999</h5>
              </div>
              <p className='footer_text mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta magnam mollitia ratione explicabo quam temporibus id inventore pariatur eum saepe.</p>
            </div>  

          </Col>
          <Col lg="3"></Col>
          <Col lg="2"></Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer