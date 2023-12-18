import React from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Dashboard.css";
import useGetData from "../custom/useGetData";

const DashBoard = () => {
  const { data: users } = useGetData("users");
  const { data: products } = useGetData("products");

  return (
    <>
      <AdminNav />
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="revenue_box">
                <h5>Total Sale</h5>
                <span>PKR 1786</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="order_box">
                <h5>order</h5>
                <span>PKR 1786</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="product_box">
                <h5>Total Product</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="user_box">
                <h5>Total user</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default DashBoard;
