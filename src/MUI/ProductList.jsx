import React from 'react'
import ProductCard from './ProductCard'
// import products from '../data/products'
const ProductList = ({ data }) => {

    return (
        <>
            <div className='cardList'>


                {/* {
                    data?.map((item, id) => {
                        <ProductCard key={id} image={item.imgUrl} prodName={item.productName} />
                        {console.log(item.productName)}
                    })
                    
                } */}

                {
                    data?.map((item, id) => {
                        return (
                            <ProductCard key={id} item={item} />
                            
                        )
                    })

                }


            </div>
        </>

    )
}

export default ProductList