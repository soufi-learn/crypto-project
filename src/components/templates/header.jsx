import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Header() {
    return (
        <header className='mb-5 p-2 px-sm-3 mt-4 rounded header-wrapper' >
            <Row className='align-items-center'>
                <Col><h2 className='header-title'>Crypto App</h2></Col>

                <Col className=' text-end'>
                    <h3>
                        <a href="https://www.instagram.com/soufi_learn">
                            Soufi Learn
                        </a>
                    </h3>
                </Col>
            </Row>
        </header>
    )
}

export default Header
