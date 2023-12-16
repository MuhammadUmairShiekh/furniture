import React, { useState } from "react";
import Helmet from "../Conponents/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../Style/Login.css";
import { register } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Conponents/Footer/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firtName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const createAcct = async (e) => {
    e.preventDefault();
    try{
      if (email == "" || pass == "" || firtName == "" || lastName == "") {
        toast.error("Please Put The information CareFully");
      } else {
        setLoading(true);
        await register(email, pass, firtName, lastName);
        setEmail("");
        setPass("");
        setFirtName("");
        setLastName("");
        navigate("/");
      }
    }catch(e){
      toast.error(e.message);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet title={"Dream Furniture Login"}>
        <section>
          <Container>
            <Row>
              {loading ? (
                <Col lg="12" className="text-center">
                  <h6 className="fw-bold"> Loading.....</h6>
                </Col>
              ) : (
                <Col lg="6" className="m-auto">
                  <Form className="auth_form" onSubmit={createAcct}>
                    <h4 className="fw-bold mb-4"> SignUp </h4>
                    <FormControl
                      sx={{ m: 1, width: "35ch" }}
                      variant="standard"
                      className="form_group1"
                    >
                      <InputLabel
                        className="text-white"
                        htmlFor="standard-adornment-password"
                      >
                        Enter Your Firts Name
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        autoComplete="off"
                        type={"text"}
                        value={firtName}
                        onChange={(e) => setFirtName(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              className="text-white"
                              aria-label="toggle password visibility"
                            >
                              <PersonIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, width: "35ch" }}
                      variant="standard"
                      className="form_group1"
                    >
                      <InputLabel
                        className="text-white"
                        htmlFor="standard-adornment-password"
                      >
                        Enter Your Last Name
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        autoComplete="off"
                        type={"text"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              className="text-white"
                              aria-label="toggle password visibility"
                            >
                              <PersonIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    <FormControl
                      sx={{ m: 1, width: "35ch" }}
                      variant="standard"
                      className="form_group1"
                    >
                      <InputLabel
                        className="text-white"
                        htmlFor="standard-adornment-password"
                      >
                        Email
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        autoComplete="off"
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              className="text-white"
                              aria-label="toggle password visibility"
                            >
                              <MailIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    <FormControl
                      sx={{ m: 1, width: "35ch" }}
                      variant="standard"
                      className="form_group1"
                    >
                      <InputLabel
                        className="text-white"
                        htmlFor="standard-adornment-password"
                      >
                        Password
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              className="text-white"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormGroup className="form_group2">
                      {/* <label className='label'>
                      <input type="file" className='custom-file-input' value={file} onChange={(e) => setFile(e.target.files)} />
                      <span>Upload Profile Pic</span>
                    </label> */}
                    </FormGroup>
                    <button className="buy_btn3 mb-8 auth_btn">SignUp</button>
                    <span>
                      <i class="ri-facebook-box-fill"></i>
                      <i class="ri-google-fill"></i>
                    </span>
                  </Form>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </Helmet>

      <Footer />
    </>
  );
};

export default SignUp;
