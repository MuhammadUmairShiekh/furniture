import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { addProductList } from "../Config/firebase";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddProduct = () => {
  const [productName, setProdTile] = useState("");
  const [shortDesc, setShortDes] = useState("");
  const [description, setDescription] = useState("");
  const [price, setProdPrice] = useState("");
  const [category, setProdCategory] = useState("");
  const [imgUrl, setProdImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addProductList({
        productName,
        shortDesc,
        description,
        category,
        price,
        imgUrl: imgUrl[0],
      });
      setLoading(false);
      setDescription("");
      setProdCategory("");
      setProdPrice("");
      setProdTile("");
      setShortDes("");
    } catch (e) {
      setLoading(false);
      toast.error(e.message);
    }
  };
  return (
    <>
      <AdminNav />
      <section className="add_product">
        <Container>
          <Row>
            {loading ? (
              // <Col lg="12" className="text-center">
              //   <h6 className="fw-bold"> Loading.....</h6>
              // </Col>

              <Box sx={{ width: 600 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            ) : (
              <Col lg="12">
                <Form onSubmit={addProduct}>
                  <h2 className="mb-4">ADD PRODUCT</h2>
                  <FormGroup className="form_group">
                    <span>Product Title</span>
                    <input
                      type="text"
                      placeholder="Double Sofa"
                      value={productName}
                      onChange={(e) => setProdTile(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="lorem........"
                      value={shortDesc}
                      onChange={(e) => setShortDes(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description.."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <FormGroup className="form_group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="PKR100,000"
                        value={price}
                        onChange={(e) => setProdPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form_group w-50">
                      <span>Category</span>
                      <select
                        className="w-100"
                        value={category}
                        onChange={(e) => setProdCategory(e.target.value)}
                        required
                      >
                        <option>Filter By Category</option>
                        <option value="sofa">sofa</option>
                        <option value="chair">chair</option>
                        <option value="table">table</option>
                        <option value="bed">bed</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className="form_group">
                      <span>Product Image</span>
                      {/* <input
                        type="file"
                        // files={prodImage}
                        onChange={(e) => setProdImage(e.target.files)}
                        required
                      /> */}
                      <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        files={imgUrl}
                        onChange={(e) => setProdImage(e.target.files)}
                      >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </FormGroup>
                  </div>
                  <button type="submit" className="buy_btn p-2">
                    Add Product
                  </button>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AddProduct;
