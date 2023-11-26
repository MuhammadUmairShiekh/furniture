import React, { useRef, useState } from 'react'
import Footer from '../Conponents/Footer/Footer'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import '../Style/Commonsection.css'
import Helmet from '../Conponents/Helmet/Helmet'
import Commomsection from './Commomsection'
import products from '../data/products'
import { motion } from 'framer-motion'
import '../Style/productDetail.css'
import ProductList from '../MUI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Config/ReduxStore/CardStore'
import { toast } from 'react-toastify';


const ProductDetail = () => {
  const [detail, setDetail] = useState('desc')
  const [rat, setRat] = useState(null)
  const userReview = useRef('')
  const userReviwMsg = useRef('')

  const { id } = useParams()
  const productItem = products.find((item) => item.id === id);
  const { productName, category, imgUrl, price, shortDesc, description, reviews, avgRating } = productItem
  const relatedProduct = products.filter(item => item.category === category)
  const submitHandler = (e) => {
    e.preventdefault() 
    const reviewUserName = userReview.current.value
    const reviewUserMsg = userReviwMsg.current.value
    console.log("reviewUserName" + reviewUserMsg )
    console.log("reviewUserName" + reviewUserName )
  };
  const dispatch = useDispatch()
  const addToCard = () => {
    dispatch(
      cartActions.addToStore({
        id,
        image: imgUrl,
        productName,
        price,
      })
    )
    toast.success("add the product in cart")

  }



  return (
    <>
      <Helmet title={productName}>
        <Commomsection />
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
                <img src={imgUrl} alt="" />
              </Col>
              <Col lg='6'>
                <div className="product_detail">
                  <h1>{productName}</h1>
                  <div className="product_rating  d-flex align-item-center gap-4 mb-4">
                    <div>
                      <span >
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span >
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span >
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span >
                        <i class="ri-star-half-s-line"></i>
                      </span>
                    </div>
                    <p>(<span>{avgRating}</span> Rating)</p>
                  </div>
                  <span className='product_price'>{`Rs:  ${price}`}</span>
                  <p className='mt-4' >{shortDesc}</p>
                  <motion.button whileTap={{ scale: 1.2 }} onClick={addToCard} className='buy_btn1 pt-0 '>Add To Card
                  </motion.button> </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                {/* <div className="tab_warapper d-flex align-item-center gap-5 mb-4">
                  <h5 className={`${detail === 'desc' ? 'active_tab' : ' '}`}
                    onClick={() => setDetail('desc')}>
                    Description</h5>
                  <h5 className={`${detail === 'rev' ? 'active_tab' : ""}`}
                    onClick={() => setDetail('rev')}>
                    Reveiws ({reviews.length})</h5>
                </div> */}
                <div className="tab_wrapper d-flex align-item-center gap-5 mb-4">
                  <h5 className={`${detail === 'desc' ? 'active_tab' : ''}`} onClick={() => setDetail('desc')}>
                    Description
                  </h5>
                  <h5 className={`${detail === 'rev' ? 'active_tab' : ''}`} onClick={() => setDetail('rev')}>
                    Reviews ({reviews.length})
                  </h5>
                </div>

                {
                  detail === "desc" ? (
                    <div className="tab_content mt-5">
                      <p> {description}</p>
                    </div>
                  ) :
                    (
                      <div className='product_reveiw mt-5'>
                        <div className='review_wrapper'>
                          <ul>
                            {
                              reviews.map((item, indes) => {
                                return (
                                  <li key={indes}>
                                    <h6>{item.ratingName}</h6>
                                    <span>{item.rating} (rating)</span>
                                    <p>{item.text}</p>
                                  </li>
                                )
                              })
                            }
                          </ul>
                          <div className="reveiw_form">
                            <h4 className='mb-3'> <q> please share your valuable experience with us </q></h4>
                            <form  onSubmit={submitHandler}>
                              <div className="form_group">
                                <input type="text" placeholder=' Enter Your Name' ref={userReview} />
                              </div>
                              <div className="form_group d-flex align-item-center gap-5">
                                <span onClick={() => setRat(1)}>1
                                  <i class="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setRat(2)}>2
                                  <i class="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setRat(3)}>3
                                  <i class="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setRat(4)}>4
                                  <i class="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setRat(5)}>5
                                  <i class="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <div className="form_group">
                                <textarea type="text" rows={5} placeholder=' Reveiw Message....' ref={userReviwMsg} />
                              </div>
                              <button type='submit' className='buy_btn1'>Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>)}
              </Col>
              <Col lg='12'>
                <h2 className='related_tittle mt-5'>
                  You might also like
                </h2>
                <ProductList data={relatedProduct} />
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