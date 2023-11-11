import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className='cardList'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
             {/* {
                data?.map(item => {
                    <ProductCard item={item} />
                })
             }      
                 */}
                
            </div>
        </>

    )
}

export default ProductList