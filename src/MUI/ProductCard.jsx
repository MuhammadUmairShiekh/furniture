import React from 'react'
import productImg from '../../src/images/arm-chair-03.jpg'
import '../../src/Style/productCard.css'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Config/ReduxStore/CardStore'
import { toast } from 'react-toastify';


function ProductCard({ item }) {
    // const { image, prodName, prodPrice, prodCatagory } = props
    // console.log(item.category)
    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(cartActions.addToStore({
            id: item.id,
            productName: item.productName,
            image: item.imgUrl,
            price: item.price,            
        })
        )
        toast.success("add the product in cart")

    }

    return (
        <>
            <Col lg='3' md='4' className='mb-2'>
                <div className='product_item'>

                    <div className='product_img'>
                        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                    </div>
                    <div className='p-2 product_info'>
                        <NavLink to={`/Shop/${item.id}`}><h3 className='product_name'>{item.productName}</h3></NavLink>
                        <p className='product_P'>{item.category}</p>

                    </div>

                    <div className='product_card-bottom p-2' >
                        <span className='price'>{item.price}</span>
                        < motion.span whileTap={{ scale: 1.3 }} onClick={addCart}  > <i class="ri-add-fill"></i></motion.span>
                    </div>
                </div>
            </Col >
        </>
    )
}

export default ProductCard
