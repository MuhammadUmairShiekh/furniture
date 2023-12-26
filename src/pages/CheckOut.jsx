import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../Conponents/Helmet/Helmet";
import Commomsection from "./Commomsection";
import Footer from "../Conponents/Footer/Footer";
import "../Style/Checkout.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.totalAmount);

  return (
    <>
      <Helmet title={"Dream Furniture  CheckOut"}>
        <Commomsection />
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mt-4 mb-4 fw-bold "> Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter Your Email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Your Number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Post Code" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkOut_Card">
                <h6>
                  {" "}
                  Total Qty: <span>{totalQty} Items</span>
                </h6>
                <h6>
                  {" "}
                  Subtotal: <span>PKR {totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    {totalAmount > 5000 ? "Shipping Charges" : "Free Shipping"}
                  </span>

                  <span>{totalAmount > 5000 ? "PKR " + 1100 : " "}</span>
                </h6>
                <h6>
                  <span>Sale Tax 17%:</span>
                  <span>PKR {(totalAmount * 17) / 100}</span>
                </h6>
                <h3>
                  {" "}
                  Total Cost:{" "}
                  <span>
                    PKR{" "}
                    {Math.floor(
                      (totalAmount * 17) / 100 + totalAmount,
                      totalAmount > 5000 ? "PKR" + 1100 : " "
                    )}
                  </span>
                </h3>
                <button className="buy_btn3 auth_btn">Place Your Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Helmet>
      <Footer />
    </>
  );
};

export default CheckOut;
