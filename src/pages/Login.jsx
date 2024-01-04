import React, { useState } from "react";
import Helmet from "../Conponents/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../Style/Login.css";
import { loginUser, auth, provider  , provider1} from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Footer from "../Conponents/Footer/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MailIcon from "@mui/icons-material/Mail";
import { signInWithPopup, getRedirectResult } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const signIN = async (e) => {
    e.preventDefault();
    if (email == "admin@gmail.com") {
      try {
        setLoading(true);
        await loginUser(email, pass);
        navigate("/DashDordi");
        toast.success("Logging Admin Panel !");
      } catch (e) {
        setLoading(false);
        toast.error(e.message);
      }
    } else {
      try {
        setLoading(true);
        await loginUser(email, pass);
        navigate("/CheckOutpage");
        toast.success("Logged Successfully");
      } catch (e) {
        setLoading(false);
        toast.error(e.message);
      }
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        setUser(user);
        navigate("/CheckOutpage");
        toast.success("Logged Successfully");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const handleFaceBook = () => {
    signInWithPopup(auth, provider1)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        setUser(user);
        navigate("/CheckOutpage");
        toast.success("Logged Successfully");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
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
                  <Form className="auth_form" onSubmit={signIN}>
                    {/* <h6 className='fw-bold text-white  mb-4'>Dream Furniture</h6> */}
                    <h4 className="fw-bold mb-4 mt-3">login </h4>
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
                        placeholder="Enter Your Email"
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

                    {/* <FormGroup className="form_group1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Valid Email"
                      />
                    </FormGroup> */}
                    {/* <FormGroup className="form_group1">
                      <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Enter Your Valid Password"
                      />
                    </FormGroup> */}
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
                        placeholder="Enter Your Password"
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
                    <button className="buy_btn3 auth_btn">Login</button>
                    <span className="btn1">
                      <FacebookLoginButton onClick={() => handleFaceBook()}>
                        <span>Log in with Facebook</span>
                      </FacebookLoginButton>
                      <GoogleLoginButton onClick={() => handleGoogle()}>
                        <span>Log in with Google</span>
                      </GoogleLoginButton>
                    </span>
                    <span>
                      <p>Don't have an account ?</p>
                      <p>
                        <NavLink to={"/SignUp"}>Create your account</NavLink>
                      </p>
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

export default Login;
