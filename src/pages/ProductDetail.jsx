import React from 'react'
import Footer from '../Conponents/Footer/Footer'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import '../Style/Commonsection.css'
import Helmet from '../Conponents/Helmet/Helmet'
import Commomsection from './Commomsection'
import products from '../data/products'
import { motion } from 'framer-motion'
import '../Style/productDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const productItem = products.find((item) => item.id === id);

  const { productName, imgUrl, price, shortDesc, description, reviews, avgRating } = productItem
  return (
    <>
      <Helmet title={"Dream Furniture Product Detail"}>
        <Commomsection title={"Products Details"} />
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
                <img src={imgUrl} alt="" />
              </Col>
              <Col lg='6'>
                <div className="product_detail">
                  <h1>{productName}</h1>
                  <div className="product_rating">
                    <div>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-half-s-line"></i>
                      </span>
                    </div>
                    <p>({avgRating} Rating)</p>
                  </div>
                  <span>{price}</span>
                  <p>{shortDesc}</p>
                  <motion.button whileTap={{ scale: 1.2 }}  className='buy_btn1 pt-0 '>Add To Card
                  </motion.button>                </div>
              </Col>
            </Row>
          </Container>
        </section>


      </Helmet>



      <Footer />
    </>

  )
}

export default ProductDetail