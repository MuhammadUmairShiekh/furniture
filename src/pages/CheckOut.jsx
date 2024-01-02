import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../Conponents/Helmet/Helmet";
import Commomsection from "./Commomsection";
import Footer from "../Conponents/Footer/Footer";
import "../Style/Checkout.css";
import { useSelector } from "react-redux";
import UseAuth from "../custom/UseAuth";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.totalAmount);
  const { currentUser } = UseAuth();
  const [cusName, setCusName] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [cusNumber, setNumber] = useState("");
  const [cusAddress, setCusAddres] = useState("");
  const [cusCity, setCusCity] = useState("");
  const [cusPostCode, setCusPostCode] = useState("");
  const [total, setTotal] = useState("");

  const orderPlace = () => {
    console.log(totalQty);
    console.log((totalAmount * 18 / 100) + totalAmount);
  };
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
                  <input
                    onChange={(e) => setCusName(e.target.value)}
                    value={cusName}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    value={!currentUser ? "" : currentUser.email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setCusEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    value={cusNumber}
                    type="text"
                    placeholder="Enter Your Number"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    onChange={(e) => setCusAddres(e.target.value)}
                    value={cusAddress}
                    type="text"
                    placeholder="Street Address"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    onChange={(e) => setCusCity(e.target.value)}
                    value={cusCity}
                    type="text"
                    placeholder="City"
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    onChange={(e) => setCusPostCode(e.target.value)}
                    value={cusPostCode}
                    type="text"
                    placeholder="Post Code"
                  />
                </FormGroup>
              </Form>
              {/* <h3>Please Fill The Form CareFully</h3> */}
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
                    {totalAmount > 30000 ? "Shipping Charges" : "Free Shipping"}
                  </span>

                  <span>{totalAmount > 80000 ? "PKR " + 1100 : " "}</span>
                </h6>
                <h6>
                  <span>Sale Tax 18%:</span>
                  <span>PKR {(totalAmount * 18) / 100}</span>
                </h6>
                <h3>
                  {" "}
                  Total Cost:{" "}
                  <span>
                    PKR{" "}
                    {Math.floor(
                      (totalAmount * 18 / 100) + totalAmount +
                      (totalAmount > 80000 ? + 1100 : 0)
                    )}
                  </span>
                </h3>
                <button onClick={orderPlace} className="buy_btn3 auth_btn">
                  Place Your Order
                </button>
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
