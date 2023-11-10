import React from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import HeroImg from '../../src/images/hero-img.png'
import '../Style/home.css'

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
                <button className='buy_btn'> SHOP NOW</button>
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

    </Helmet>

  )
}

export default Home