import React from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import Commomsection from './Commomsection'
import Footer from '../Conponents/Footer/Footer'
import { Container, Row, Col } from 'reactstrap'
import text from '../images/arm-chair-03.jpg'

const Card = () => {
  return (
    <>

      <Helmet title={"Dream Furniture Card"} >
        <Commomsection title={"Thanks For Shopping"} />
        <section>
          <Container>
            <Row>
              <Col lg='9'>
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={text} alt="" /></td>
                      <td>Modern Chair</td>
                      <td>Rs: 42,352</td>
                      <td>2px</td>
                      <td>
                        <span>
                          <i class="ri-delete-bin-2-line"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col lg="3">

              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  )
}

export default Card