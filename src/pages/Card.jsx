import React from "react";
import Helmet from "../Conponents/Helmet/Helmet";
import Commomsection from "./Commomsection";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col } from "reactstrap";
// import text from '../images/arm-chair-03.jpg'
import "../Style/Card.css";
import { motion } from "framer-motion";
import { cartActions } from "../ReduxStore/CardStore";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Card = () => {
  const cartItem = useSelector((state) => state.cartItem);
  const totalAmount = useSelector((state) => state.totalAmount);
  console.log(cartItem  )
  return (
    <>
      <Helmet title={"Dream Furniture Card"}>
        <Commomsection title={"Thanks For Shopping"} />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItem.length === 0 ? (
                  <h1 className="empty">Your cart is empty ☹ !</h1>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Product Price</th>
                        <th>Qty</th>
                        <th> Price</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
              <Col lg="3">
                <div className="mt-4 mb-4 amount">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Subtotal
                    <span className="fw-bold">Rs.{totalAmount}/-</span>
                  </h5>
                </div>
                <div>
                  <NavLink to={"/CheckOutpage"}>
                    <button className="buy_btn2  mb-3 ">CheckOut</button>
                  </NavLink>
                  <NavLink to={"/Shop"}>
                    <button className="buy_btn2  ">Continue-Shopping</button>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>PKR {item.price}</td>
      <td>{item.quantity}px</td>
      <td>PKR {item.price * item.quantity}</td>
      <motion.td whileTap={{ scale: 0.8 }}>
        <span>
          <i onClick={deleteProduct} class="ri-delete-bin-2-line"></i>
        </span>
      </motion.td>
    </tr>
  );
};

export default Card;
