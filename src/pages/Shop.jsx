import React from "react";
import Footer from "../Conponents/Footer/Footer";
import Commomsection from "./Commomsection";
import Helmet from "../Conponents/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Shop.css";
import { useState } from "react";
import products from "../data/products";
import ProductList from "../MUI/ProductList";
import useGetData from "../custom/useGetData";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Shop = () => {
  const { data: products } = useGetData("products");
  const [productList, setProductList] = useState(products);
  // const [loading , setLoading] = useState(false)


  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductList(filterProducts);
    }
    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductList(filterProducts);
    }
    if (filterValue === "Clear_filter") {
      const clear_filter = products.sort(
        (item) => item.filter === "Clear_filter"
      );
      setProductList(clear_filter);
    }
    if (filterValue === "table") {
      const filterProducts = products.filter(
        (item) => item.category === "table"
      );
      setProductList(filterProducts);
    }
    if (filterValue === "bed") {
      const filterProducts = products.filter((item) => item.category === "bed");
      setProductList(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductList(searchProducts);
  };

  return (
    <>
      <Helmet title={"Dream Furniture  Shop"}>
        <Commomsection />
        <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option value="Clear_filter">Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="table">Tabel</option>
                    <option value="bed">Bed</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option>Sort BY</option>
                    <option value="Ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12">
                <div className="search_box">
                  <input
                    type="text"
                    placeholder="Search Here......"
                    onChange={handleSearch}
                  />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              {!products.length ? (
                <Box className="Loder" sx={{ width: 1000 }}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              ) : (
                <Col>
                  {productList.length == 0 ? (
                    <h1 className="text-center fs-4">Product Not Found! ☹</h1>
                  ) : (
                    <ProductList data={productList} />
                  )}
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </Helmet>

      <Footer />
    </>
  );
};

export default Shop;
