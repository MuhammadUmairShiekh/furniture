import React from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import HeroImg from '../../src/images/hero-img.png'
import '../Style/home.css'
import Service from '../service/Service'
import ProductList from '../UI/ProductList'


const Home = () => {
  const year = new Date().getFullYear()
  return (
    <Helmet>
      <section className='hero_section'>
        <Container >
          <Row>
            <Col lg="6" md="6">
              <div className='hero_content'>
                <p className='hero_subtitle'> Trending Product In {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Neque unde itaquelaborum numquam ullam sequi vero,
                  incidunt quisquam eaque veritatis?</p>
                <motion.button whileTap={{ scale: 1.4 }} className='buy_btn'><NavLink to={'/Shop'}>
                  SHOP NOW</NavLink>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero_img'>
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      <Service />

      <section className="trending_product">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2  className='section_title'>Trending Products</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <ProductList />
    </Helmet>

  )
}

export default Home