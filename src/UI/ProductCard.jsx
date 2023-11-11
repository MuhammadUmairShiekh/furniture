import React from 'react'
import productImg from '../../src/images/arm-chair-03.jpg'
import '../../src/Style/productCard.css'
import { Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = (item) => {

    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product_item'>
                <div className='product_img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={productImg} alt="" />
                </div>
                <div className='p-2 product_info'>
                    <NavLink to={"/Shop/:id"}><h3 className='product_name'>Modern Arm-Chair</h3></NavLink>
                    <p className='product_P'>Chair</p>
                </div>

                <div className='product_card-bottom p-2' >
                    <span className='price'>Rs 94,299</span>
                    < motion.span whileTap={{ scale: 1.3 }} > <i class="ri-add-fill"></i></motion.span>
                </div>
            </div>
        </Col >
    )
}

export default ProductCard
