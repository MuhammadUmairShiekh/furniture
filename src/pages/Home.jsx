import React, { useEffect, useState } from "react";
import Helmet from "../Conponents/Helmet/Helmet";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import HeroImg from "../../src/images/pngegg.png";
import countTimer from "../../src/images/counter-timer-img.png";
import "../Style/home.css";
import Service from "../service/Service";
import ProductList from "../MUI/ProductList";
import Clock from "../MUI/Clock";
import Footer from "../Conponents/Footer/Footer";
import useGetData from "../custom/useGetData";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Home = () => {
  const { data: products } = useGetData("products");
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filterTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const filterBestProduct = products.filter(
      (item) => item.category === "sofa"
    );
    setTrending(filterTrendingProduct);
    setBestProduct(filterBestProduct);
  }, [products]);
  return (
    <>
      <Helmet title={"Dream Furniture Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <motion.div className="hero_content">
                  <p className="hero_subtitle"> Trending Product In {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Neque unde itaquelaborum numquam ullam sequi vero, incidunt
                    quisquam eaque veritatis?
                  </p>
                  <motion.button whileTap={{ scale: 1.4 }} className="buy_btn">
                    <NavLink to={"/Shop"}>SHOP NOW</NavLink>
                  </motion.button>
                </motion.div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
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
              <Col lg="12" className="text-center">
                <h2 className="section_title">Trending Products</h2>
              </Col>
            </Row>
          </Container>
        </section>
        <ProductList data={trending} />
        {/* <ProductList data={console.log(trending)} /> */}

        <section className="best_Sale">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Best Sales</h2>
              </Col>
              <ProductList data={bestProduct} />
            </Row>
          </Container>
        </section>

        <section className="timer_count">
          <Container>
            <Row>
              <Col lg="6" md="12" className="count_down">
                <div className="clock_top">
                  <h4 className="text-white fs-7 mb-2">Limited Time Offers</h4>
                  <h3 className=" border-0 text-white fs-5 mb-3">
                    Quality ArmChair
                  </h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy_btn store_btn"
                >
                  <NavLink to={"/Shop"}>Visit Store</NavLink>
                </motion.button>
              </Col>
              <Col className="text-end  counter_img" lg="6" md="12">
                <img src={countTimer} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="new_arrival">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">New Arrivals</h2>
              </Col>
              {loading ? (
                <Box sx={{ width: 600 }}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              ) : (
                <ProductList data={bestProduct} />
              )}
            </Row>
          </Container>
        </section>
        <section className="polular_catagorey">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Popular Category</h2>
              </Col>
              <ProductList data={bestProduct} />
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  );
};

export default Home;
