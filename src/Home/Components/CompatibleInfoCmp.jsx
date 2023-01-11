import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const CompatibleInfoCmp = () => {
  return (
    <div>
        <Row xs={1} md={2}>
            <Col className='stream-tv-col'>
                <h2>We’re compatible.</h2>
                <p>Stream Plex from just about any phone, tablet, smart TV, gaming consoles, or PC.</p>         
                <img style={{border:'2px solid balck'}} src='https://www.plex.tv/wp-content/uploads/2020/03/avod-device-icons-1.png' width='300px' /> <br/>
                <Button variant='warning' className='carousel-btn' style={{color:'white',borderRadius:'20px'}}>Stream Free Now</Button>
            </Col>
            <Col className='stream-tv-col'>
                <img src='https://www.plex.tv/wp-content/uploads/2021/05/image-avod-devices-all-may-2021-1440x872.png' width='100%' height='450vh' />
            </Col>
        </Row>
    </div>
  )
}
