import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Conponents/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { userData, db } from "../Config/firebase";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productData();
  }, []);
  const productData = async () => {
    const userList = await userData();
    setData(userList);
    setLoading(true);
  };
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "ProductList", id));
    toast.success("Data Delete");
  };
  return (
    <>
      <AdminNav />
      <Container>
        <Row>
          <Col lg="12" className="fw-bold">
            <h2>User </h2>
          </Col>
          {!loading ? (
            <Box sx={{ width: 600 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          ) : (
            <Col lg="12" className="yt-5">
              <table className="table text-left">
                <thead>
                  <tr>
                    <th>UserName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.firtName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
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

export default User;
