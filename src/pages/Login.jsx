import React, { useState } from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../Style/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <Helmet title={"Dream Furniture Login"}>
        <section>
          <Container>
            <Row>
              <Col lg='6' className='m-auto' >
                <Form className='auth_form'>
                  <h4 className='fw-bold mb-4'>Welcome to login </h4>

                  <FormGroup className='form_group1'>
                    {/* <i class="ri-mail-send-line"></i> */}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Valid Email' />
                  </FormGroup>
                  <FormGroup className='form_group1'>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Valid Password' />
                  </FormGroup>
                  <button className='buy_btn3 auth_btn'>Login</button>
                  <span >
                    <i class="ri-facebook-box-fill"></i>
                    <i class="ri-google-fill"></i>
                  </span>
                  <span>
                    <p>Don't have an account ?</p>
                    <p>
                      <NavLink to={'/SignUp'} >Create your account</NavLink>
                    </p>
                  </span>

                </Form>
              </Col>
            </Row>
          </Container>

        </section>


      </Helmet>


    </>
  )
}

export default Login