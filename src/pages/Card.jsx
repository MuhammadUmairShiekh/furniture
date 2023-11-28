import React from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import Commomsection from './Commomsection'
import Footer from '../Conponents/Footer/Footer'
import { Container, Row, Col } from 'reactstrap'
import text from '../images/arm-chair-03.jpg'
import '../Style/Card.css'
import { motion } from 'framer-motion'
import { cartActions } from '../Config/ReduxStore/CardStore'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Card = () => {
  const cartItem = useSelector((state) => state.cart.cartItem)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  return (
    <>
      <Helmet title={"Dream Furniture Card"} >
        <Commomsection title={"Thanks For Shopping"} />
        <section>
          <Container>
            <Row>
              <Col lg='9'>
                {
                  cartItem.length === 0 ? (<h1 className='empty'  >Your cart is empty ☹ !</h1>
                  ) : (
                    <table className='table bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartItem.map((item, index) => (
                            <Tr item={item} key={index} />
                          ))
                        }
                      </tbody>
                    </table>
                  )
                }


              </Col>
              <Col lg="3">
                <div>
                  <h5>Subtotal</h5>
                  <span> {totalAmount}</span>
                </div>
                <div>
                  <NavLink to={"/Shop"}>
                    <button className='buy_btn2 pt-0 '>Continue-Shopping</button>
                  </NavLink>
                  <NavLink to={"/CheckOut"}>
                    <button className='buy_btn2 pt-0 '>CheckOut</button>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  )
}
const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr >
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>Rs.{item.price}</td>
      <td>{item.quantity}px</td>
      <motion.td whileTap={{ scale: 0.8 }}>
        <span >
          <i onClick={deleteProduct} class="ri-delete-bin-2-line"></i>
        </span>
      </motion.td>
    </tr>
  )


}

export default Card