import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [prodTitle, setProdTile] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [des, setDes] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodImage, setProdImage] = useState(null);

  const addProduct = async (e) => {
    e.preventDefault();

    const productItems = {
      title: prodTitle,
      shorDes: shortDes,
      description: des,
      categroy: prodCategory,
      price: prodPrice,
      imgaeUrl: prodImage,
    };
    toast.success("Product Add");

    console.log(productItems);
  };
  return (
    <>
      <AdminNav />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Form onSubmit={addProduct}>
                <h2 className="mb-4">ADD PRODUCT</h2>
                <FormGroup className="form_group">
                  <span>Product Title</span>
                  <input
                    type="text"
                    placeholder="Double Sofa"
                    value={prodTitle}
                    onChange={(e) => setProdTile(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <span>Short Description</span>
                  <input
                    type="text"
                    placeholder="lorem........"
                    value={shortDes}
                    onChange={(e) => setShortDes(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <span>Description</span>
                  <input
                    type="text"
                    placeholder="Description.."
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    required
                  />
                </FormGroup>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <FormGroup className="form_group w-50">
                    <span>Price</span>
                    <input
                      type="number"
                      placeholder="PKR100,000"
                      value={prodPrice}
                      onChange={(e) => setProdPrice(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group w-50">
                    <span>Category</span>
                    <select
                      className="w-100"
                      value={prodCategory}
                      onChange={(e) => setProdCategory(e.target.value)}
                      required
                    >
                      <option value="Chair">Chair</option>
                      <option value="Sofa">Sofa</option>
                      <option value="Table">Table</option>
                      <option value="Bed">Bed</option>
                    </select>
                  </FormGroup>
                </div>
                <div>
                  <FormGroup className="form_group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      // files={prodImage}
                      onChange={(e) => setProdImage(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                </div>
                <button type="submit" className="buy_btn p-2">
                  Add Product
                </button>
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
