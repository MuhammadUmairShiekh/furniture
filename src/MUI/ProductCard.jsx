import React, { useState } from "react";
import productImg from "../../src/images/arm-chair-03.jpg";
import "../../src/Style/productCard.css";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../Config/ReduxStore/CardStore";
import { toast } from "react-toastify";


function ProductCard({ item }) {
  // const { image, prodName, prodPrice, prodCatagory } = props
  // console.log(item.category)

  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(
      cartActions.addToStore({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("add the product in cart");
  };

  return (
    <>
      
      
        <Col lg="3" md="4" className="mb-2">
          <div className="product_item">
            <div className="product_img">
              <NavLink to={`/Shop/${item.id}`}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={item.imgUrl}
                  alt=""
                />
              </NavLink>
            </div>
            <div className="product_info">
              <NavLink to={`/Shop/${item.id}`}>
                <h3 className="product_name">{item.productName}</h3>
              </NavLink>
              <p className="product_P">{item.category}</p>
            </div>

            <div className="product_card-bottom p-4">
              <span className="price"> PKR {item.price}</span>
              <motion.span whileTap={{ scale: 1.3 }} onClick={addCart}>
                {" "}
                <i class="ri-add-fill"></i>
              </motion.span>
            </div>
          </div>
        </Col>
      
    </>
  );
}

export default ProductCard;
