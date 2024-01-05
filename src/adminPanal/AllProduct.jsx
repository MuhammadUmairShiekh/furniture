import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { getData, db } from "../Config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { toast } from "react-toastify";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productData();
  }, []);
  const productData = async () => {
    const productList = await getData();
    setData(productList);
    setLoading(true);
  };
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Data Delete");
  };

  return (
    <>
      <AdminNav />
      <Container>
        <Row>
          {!loading ? (
            <Box className="Loder" sx={{ width: 1000 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          ) : (
            <Col lg="12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Categroy</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>
                          <Button
                            onClick={() => {
                              deleteData(item.id);
                            }}
                            variant="contained"
                            startIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          )}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default AllProduct;
