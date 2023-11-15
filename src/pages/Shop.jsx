import React  from 'react'
import Footer from '../Conponents/Footer/Footer'
import Commomsection from './Commomsection'
import Helmet from '../Conponents/Helmet/Helmet'
import { Container, Row, Col } from 'react-bootstrap'
import '../Style/Shop.css'
import products from '../data/products'
import { useEffect, useState } from 'react'
import ProductList from '../UI/ProductList'

const Shop = () => {
const [productList , setProductList  ] = useState(products)

const handleFilter = (e) => {
  const filterValue = e.target.value;
  if(filterValue === 'sofa'){
    const filterProducts = products.filter(
      (item) => item.category === 'sofa'
    );
    setProductList(filterProducts)
    console.log(setProductList(filterProducts))
  }
  if(filterValue === 'Chair'){
    const filterProducts = products.filter(
      (item) => item.category === 'Chair'
    );
    setProductList(filterProducts)
    console.log(setProductList(filterProducts))
  }
  if(filterValue === 'table'){
    const filterProducts = products.filter(
      (item) => item.category === 'table'
    );
    setProductList(filterProducts)
    console.log(setProductList(filterProducts))
  }
  if(filterValue === 'bed'){
    const filterProducts = products.filter(
      (item) => item.category === 'bed'
    );
    setProductList(filterProducts)
    console.log(setProductList(filterProducts))
  }
}

const handleSearch = e => {
  const searchItem = e.target.value
  const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchItem.toLowerCase()))
  setProductList(searchProducts)
}

  return (
    <>
      <Helmet>
        <Commomsection title={"Products"} />
        <section>
          <Container>
            <Row>
              <Col lg='3' md='3'>
                <div className="filter_widget">
                  <select onChange={handleFilter} >
                    <option >Filter By Category</option>
                    <option value='sofa'>Sofa</option>
                    <option value='chair'>Chair</option>
                    <option value='tabel' >Tabel</option>
                    <option value='bed' >Bed</option>
                  </select>
                </div>

              </Col>
              <Col lg='3' md='3'>
                <div className="filter_widget">
                  <select>
                    <option >Sort BY</option>
                    <option value='Ascending' >Ascending</option>
                    <option value='descending' >Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="search_box">
                  <input type="text" placeholder='Search Here......' onChange={handleSearch}  />
                  <span><i class="ri-search-line"></i></span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
              {
                productList.length === 0 ? <h1>Product Not Found</h1>
                : <ProductList data={productList}/>
              }
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>

      <Footer />

    </>

  )
}

export default Shop