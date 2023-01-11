import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const BorderRegisterCmp = () => {
  return (
    <div className='BorderRegister'>
        <Row xs={1} md={2}>
            <Col className='border-register-ctx' style={{textAlign:'start',marginTop:'8%',paddingLeft:'10%'}}>
                <h2>Pause,save,resume.</h2>
                <p>Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, you can pick up where you left off with ease.</p>
                <Button variant='warning' className='carousel-btn'>Register Free</Button>
            </Col>
            <Col className='border-register-ctx'>
                <img src='https://www.plex.tv/wp-content/uploads/2021/09/Continue_Watching_v2-2-1440x1529.png' width='60%' height='100%' />
            </Col>
        </Row>
    </div>
  )
}
