import React from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AddProduct = () => {
  return (
    <>
      <AdminNav />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Form>
                <FormGroup className='form_group' >
                  <span>Product Title</span>
                  <input type="text" placeholder="Double Sofa" />
                </FormGroup>
                <FormGroup className='form_group'>
                  <span>Short Description</span>
                  <input type="text" placeholder="lorem........" />
                </FormGroup>
                <FormGroup className='form_group'>
                  <span>Description</span>
                  <input type="text" placeholder="Description.." />
                </FormGroup>
                <div>
                  <FormGroup className='form_group'>
                    <span>Price</span>
                    <input type="number" placeholder="PKR100,000" />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <span>Category</span>
                    <select name="">
                      <option value="Chair">Chair</option>
                      <option value="Sofa">Sofa</option>
                      <option value="Table">Table</option>
                      <option value="Bed">Bed</option>
                    </select>
                  </FormGroup>
                </div>
                <div>
                  <FormGroup className='form_group' >
                    <span>Product Image</span>
                    <input type="file" />
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AddProduct;
