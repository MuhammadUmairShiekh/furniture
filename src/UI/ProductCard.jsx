import React from 'react'
import productImg from '../../src/images/arm-chair-01.jpg'
import '../../src/Style/productCard.css'
import { Col } from 'reactstrap'

const ProductList = () => {
    return (
        <Col lg='3' md='4'>
            <div className='product_item'>
                <div className='product_img'>
                    <img src={productImg} alt="" />
                </div>
                <div className='p-2 product_info'>
                    <h3 className='product_name'>Modern Arm-Chair</h3>
                    <p className='product_P'>Chair</p>
                </div>

                <div className='product_card-bottom p-2' > 
                    <span className='price'>Rs 94,299</span>
                    <span><i class="ri-add-fill"></i></span>
                </div>
            </div>
        </Col>
    )
}

export default ProductList
