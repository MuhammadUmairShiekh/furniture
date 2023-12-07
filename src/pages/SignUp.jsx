import React, { useState } from 'react'
import Helmet from '../Conponents/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../Style/Login.css'
import { register } from '../Config/firebase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [firtName, setFirtName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [file, setFile] = useState('')

  const createAcct = (e) => {
    e.preventDefault()
    register(email, pass, firtName, lastName)
    setEmail('');
    setPass('');
    setFirtName('');
    setLastName('');

  }
  return (
    <>
      <Helmet title={"Dream Furniture Login"}>
        <section>
          <Container>
            <Row>
              <Col lg='6' className='m-auto' >
                <Form className='auth_form' onSubmit={createAcct} >
                  <h4 className='fw-bold mb-4'>Welcome to SignUp </h4>
                  <FormGroup className='form_group1'>
                    <input type="text" value={firtName} onChange={(e) => setFirtName(e.target.value)} placeholder='Enter Your First Name' />
                  </FormGroup>
                  <FormGroup className='form_group1'>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Enter Your Last Name' />
                  </FormGroup>
                  <FormGroup className='form_group1'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Valid Email' />
                  </FormGroup>
                  <FormGroup className='form_group1'>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Valid Password' />
                  </FormGroup>
                  <FormGroup className='form_group2'>
                    {/* <label className='label'>
                      <input type="file" className='custom-file-input' value={file} onChange={(e) => setFile(e.target.files)} />
                      <span>Upload Profile Pic</span>
                    </label> */}
                  </FormGroup>
                  <button className='buy_btn3 mb-8 auth_btn'>SignUp</button>
                  <span >
                    <i class="ri-facebook-box-fill"></i>
                    <i class="ri-google-fill"></i>
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

export default SignUp