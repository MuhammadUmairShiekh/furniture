import React from 'react'
import { Container } from 'react-bootstrap'
import '../Style/Commonsection.css'

const Commomsection = ({ title }) => {
    return (
        <section className="common_section">
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>

        </section>

    )
}

export default Commomsection