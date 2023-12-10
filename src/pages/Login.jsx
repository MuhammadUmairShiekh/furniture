import React, { useState } from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../Style/Login.css'
import { loginUser } from '../Config/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";


const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [password , setPassword] = useState(false)
  const navigate = useNavigate()


  const signIN = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await loginUser(email, pass)
      navigate('/CheckOutpage')
      toast.success("Logged Successfully")


    } catch (e) {
      setLoading(false)
      toast.error(e.message)

    }
  }

  return (
    <>
      <Helmet title={"Dream Furniture Login"}>
        <section>
          <Container>
            <Row>
              {
                loading ? <Col lg='12' className='text-center'>
                  <h6 className='fw-bold' > Loading.....</h6>
                </Col> :
                  <Col lg='6' className='m-auto' >
                    <Form className='auth_form' onSubmit={signIN} >
                      {/* <h6 className='fw-bold text-white  mb-4'>Dream Furniture</h6> */}
                      <h4 className='fw-bold mb-4 mt-3'>login </h4>

                      <FormGroup className='form_group1'>
                        {/* <i class="ri-mail-send-line"></i> */}
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Valid Email' />
                      </FormGroup>
                      <FormGroup className='form_group1'>
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Valid Password' />
                      </FormGroup>
                      <button className='buy_btn3 auth_btn'>Login</button>
                      <span className='btn1' >

                        {/* <button className='buy_btn0 auth_btn'>
                      <i class="ri-facebook-box-fill">
                      </i> Facebook </button>
                    <button className='buy_btn0 auth_btn'>
                      <i class="ri-google-fill">
                      </i> Google</button> */}
                        <FacebookLoginButton onClick={() => alert("Hello")}>
                          <span>Log in with Facebook</span>
                        </FacebookLoginButton>
                        <GoogleLoginButton onClick={() => alert("Hello")} >
                          <span>Log in with Google</span>
                        </GoogleLoginButton>

                      </span>
                      <span>
                        <p>Don't have an account ?</p>
                        <p>
                          <NavLink to={'/SignUp'} >Create your account</NavLink>
                        </p>
                      </span>

                    </Form>
                  </Col>
              }
            </Row>
          </Container>

        </section>


      </Helmet>


    </>
  )
}

export default Login